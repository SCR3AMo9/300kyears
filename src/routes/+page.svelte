<script lang="ts">
	import { timelineData as eras } from '$lib/data/timeline';
	import { eraSummaries } from '$lib/data/era-summaries';
	import type { TimelineEvent, EventType } from '$lib/data/types';
	import TimelineWidget from '$lib/components/TimelineWidget.svelte';
	import TableOfContents from '$lib/components/TableOfContents.svelte';
	import { onMount } from 'svelte';

	// Helper functions for tag handling
	function getEventTags(event: TimelineEvent): EventType[] {
		return event.tags ?? (event.type ? [event.type] : []);
	}

	function getPrimaryTag(event: TimelineEvent): EventType | undefined {
		return getEventTags(event)[0];
	}

	function containsTechTag(event: TimelineEvent): boolean {
		const tags = getEventTags(event);
		return tags.includes('tech');
	}

	function formatTagLabel(tag: EventType): string {
		return tag.charAt(0).toUpperCase() + tag.slice(1);
	}

	// Track which tech events are expanded (collapsed by default)
	let expandedTechEvents = $state<Set<string>>(new Set());

	// Track which era summaries are expanded (collapsed by default)
	let expandedEraSummaries = $state<Set<string>>(new Set());

	// Track which era links sections are expanded (collapsed by default)
	let expandedEraLinks = $state<Set<string>>(new Set());

	function toggleEraSummary(eraId: string) {
		if (expandedEraSummaries.has(eraId)) {
			expandedEraSummaries.delete(eraId);
			expandedEraSummaries = new Set(expandedEraSummaries);
		} else {
			expandedEraSummaries.add(eraId);
			expandedEraSummaries = new Set(expandedEraSummaries);
		}
	}

	function toggleEraLinks(eraId: string) {
		if (expandedEraLinks.has(eraId)) {
			expandedEraLinks.delete(eraId);
			expandedEraLinks = new Set(expandedEraLinks);
		} else {
			expandedEraLinks.add(eraId);
			expandedEraLinks = new Set(expandedEraLinks);
		}
	}

	// Scroll to event by entry number (1-indexed) within an era
	function scrollToEventByEntry(era: typeof eras[0], entryNum: string) {
		const eventIndex = Number(entryNum) - 1; // Convert to 0-indexed
		if (eventIndex >= 0 && eventIndex < era.events.length) {
			const event = era.events[eventIndex];
			const element = document.getElementById(event.id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
	}

	function toggleTechEvent(eventId: string) {
		if (expandedTechEvents.has(eventId)) {
			expandedTechEvents.delete(eventId);
			expandedTechEvents = new Set(expandedTechEvents);
		} else {
			expandedTechEvents.add(eventId);
			expandedTechEvents = new Set(expandedTechEvents);
		}
	}

	// Track which eras are expanded (all expanded by default)
	let expandedEras = $state<Set<string>>(new Set(eras.map(era => era.id)));

	function toggleEra(eraId: string) {
		if (expandedEras.has(eraId)) {
			expandedEras.delete(eraId);
			expandedEras = new Set(expandedEras);
		} else {
			expandedEras.add(eraId);
			expandedEras = new Set(expandedEras);
		}
	}

	let activeSection = $state('');
	let activeEraIndex = $state(0);
	let activeEventId = $state('');
	let tocElement: HTMLElement | null = $state(null);
	let isHoveringToc = $state(false);
	let isMounted = $state(false);
	let isMobileTocOpen = $state(false);

	function toggleMobileToc() {
		isMobileTocOpen = !isMobileTocOpen;
	}

	function closeMobileToc() {
		isMobileTocOpen = false;
	}

	function scrollToSection(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}

	// Era observer - set up once on mount
	onMount(() => {
		isMounted = true;

		const eraElements = eras.map(era => document.getElementById(era.id));

		const eraObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const eraId = entry.target.id;
						const index = eras.findIndex(era => era.id === eraId);
						if (index !== -1) {
							activeEraIndex = index;
							activeSection = eraId;
						}
					}
				});
			},
			{
				rootMargin: '-20% 0px -60% 0px',
				threshold: 0
			}
		);

		eraElements.forEach(el => {
			if (el) eraObserver.observe(el);
		});

		// Sync TOC scroll with page scroll (when not hovering TOC)
		function syncTocScroll() {
			if (!tocElement || isHoveringToc) return;

			const scrollTop = window.scrollY;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const scrollProgress = Math.min(scrollTop / docHeight, 1);

			const tocScrollHeight = tocElement.scrollHeight - tocElement.clientHeight;
			tocElement.scrollTop = scrollProgress * tocScrollHeight;
		}

		window.addEventListener('scroll', syncTocScroll, { passive: true });

		return () => {
			isMounted = false;
			eraObserver.disconnect();
			window.removeEventListener('scroll', syncTocScroll);
		};
	});

	// Event observer reference for cleanup
	let eventObserver: IntersectionObserver | null = null;

	// Event observer - re-run when expandedEras changes
	$effect(() => {
		if (!isMounted) return;

		// Access expandedEras to create dependency
		const currentExpandedEras = expandedEras;

		// Clean up previous observer
		if (eventObserver) {
			eventObserver.disconnect();
			eventObserver = null;
		}

		// Use setTimeout to ensure DOM has updated after era expansion/collapse
		const timeoutId = setTimeout(() => {
			const eventElements: Element[] = [];
			eras.forEach(era => {
				// Only look for events in expanded eras
				if (currentExpandedEras.has(era.id)) {
					era.events.forEach(event => {
						const el = document.getElementById(event.id);
						if (el) eventElements.push(el);
					});
				}
			});

			eventObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting) {
							activeEventId = entry.target.id;
						}
					});
				},
				{
					rootMargin: '-30% 0px -50% 0px',
					threshold: 0
				}
			);

			eventElements.forEach(el => eventObserver!.observe(el));
		}, 50);

		return () => {
			clearTimeout(timeoutId);
			if (eventObserver) {
				eventObserver.disconnect();
				eventObserver = null;
			}
		};
	});
</script>

<div class="page">
	<!-- Mobile TOC Toggle Button -->
	<button class="mobile-toc-toggle" onclick={toggleMobileToc} aria-label="Toggle table of contents">
		<span class="hamburger-icon" class:open={isMobileTocOpen}>
			<span></span>
			<span></span>
			<span></span>
		</span>
	</button>

	<!-- Mobile TOC Overlay -->
	{#if isMobileTocOpen}
		<div class="mobile-toc-overlay" onclick={closeMobileToc}></div>
	{/if}

	<header class="header">
		<div class="header-content">
			<h1 class="site-title">300k Years</h1>
			<p class="site-subtitle">The things we did</p>
		</div>
	</header>

	<aside
		class="toc-sidebar"
		class:mobile-open={isMobileTocOpen}
		bind:this={tocElement}
		onmouseenter={() => isHoveringToc = true}
		onmouseleave={() => isHoveringToc = false}
	>
		<div class="mobile-toc-header">
			<span class="mobile-toc-title">Table of Contents</span>
			<button class="mobile-toc-close" onclick={closeMobileToc} aria-label="Close menu">&times;</button>
		</div>
		<TableOfContents {activeEraIndex} {activeEventId} onNavigate={closeMobileToc} />
	</aside>

	<main class="main">
		<div class="main-grid">
		<article class="article">
			<section id="introduction" class="intro-section">
				<p class="intro-lead">
					This timeline traces the evolution of human meaning-making across 300,000 years—from
					the first burials that suggest consciousness of death, through the catastrophic Laschamp
					Excursion that may have triggered symbolic thought, to the present moment where AI
					threatens to reshape how we construct meaning itself.
				</p>

				<p>
					Each era represents a distinct phase in how our species has processed existence: the
					interplay of <strong>WHAT</strong> we experience and know to be fact, <strong>WHY</strong> it matters, and
					<strong>HOW</strong> we respond. We will try to find patterns behind the patterns: <em>Expansions</em> when
					ideas spreads, <em>Collapses</em> when systems fail, and <em>Hammerfalls</em>—those
					catastrophic moments when the sky breaks and everything must be reinvented.
				</p>
			</section>

			<nav class="era-nav">
				{#each eras as era}
					<button class="era-nav-item" onclick={() => scrollToSection(era.id)}>
						<span class="era-nav-number">{era.number}</span>
						<span class="era-nav-title">{era.title}</span>
					</button>
				{/each}
			</nav>

			<section id="timeline" class="timeline-section">
				{#each eras as era (era.id)}
					<article class="era" class:expanded={expandedEras.has(era.id)} id={era.id}>
						<!-- Collapsed era header (clickable) -->
						<button class="era-collapsed-header" onclick={() => toggleEra(era.id)}>
							<span class="era-toggle" class:expanded={expandedEras.has(era.id)}>&#9658;</span>
							<span class="era-collapsed-title">{era.title}</span>
						</button>

						{#if expandedEras.has(era.id)}
							<!-- Expanded era content -->
							<header class="era-header">
								<button class="era-header-toggle" onclick={() => toggleEra(era.id)}>
									<span class="era-toggle expanded">&#9658;</span>
								</button>
								<div class="era-header-content">
									<div class="era-meta">
										<span class="era-label">Era {era.number}</span>
										<span class="era-date">{era.timespan}</span>
									</div>
									<h2 class="era-title">{era.title}</h2>
									<p class="era-description">{era.description}</p>
								</div>
							</header>

							<!-- Era Summary (collapsible) -->
							{#if eraSummaries[era.id]}
								<div class="era-summary-section">
									<button class="era-summary-header" onclick={() => toggleEraSummary(era.id)}>
										<span class="summary-toggle" class:expanded={expandedEraSummaries.has(era.id)}>&#9658;</span>
										<span class="summary-title">Era Summary: Knowledge Loss Assessment</span>
									</button>

									{#if expandedEraSummaries.has(era.id)}
										{@const summary = eraSummaries[era.id]}
										<div class="era-summary-body">
											<div class="summary-stats">
												<div class="stat-card discovered">
													<span class="stat-label">Discovered</span>
													<span class="stat-value">{summary.discovered}</span>
												</div>
												<div class="stat-card recoverable">
													<span class="stat-label">Recoverable</span>
													<span class="stat-value">{summary.recoverable}</span>
												</div>
												<div class="stat-card lost">
													<span class="stat-label">Permanently Lost</span>
													<span class="stat-value">{summary.permanentlyLost}</span>
												</div>
											</div>

											<div class="summary-sections">
												<div class="summary-block">
													<h4 class="summary-block-title">Why So Much Is Lost</h4>
													<ul class="summary-list">
														{#each summary.whyLost as item}
															<li>{item}</li>
														{/each}
													</ul>
												</div>

												<div class="summary-block">
													<h4 class="summary-block-title">What's Recoverable</h4>
													<ul class="summary-list recoverable-list">
														{#each summary.whatsRecoverable as item}
															<li>{item}</li>
														{/each}
													</ul>
												</div>

												{#if summary.whatAICouldFind}
													<div class="summary-block">
														<h4 class="summary-block-title">What AI Excavation Could Find</h4>
														<ul class="summary-list ai-list">
															{#each summary.whatAICouldFind as item}
																<li>{item}</li>
															{/each}
														</ul>
													</div>
												{/if}

												<div class="summary-block">
													<h4 class="summary-block-title">What's Gone Forever</h4>
													<ul class="summary-list lost-list">
														{#each summary.whatsGoneForever as item}
															<li>{item}</li>
														{/each}
													</ul>
												</div>
											</div>
										</div>
									{/if}
								</div>
							{/if}

							<div class="era-content">
								{#each era.events as event (event.id)}
									{#if containsTechTag(event)}
										<!-- Collapsible tech event -->
										<div class="tech-event" id={event.id}>
											<button class="tech-header" onclick={() => toggleTechEvent(event.id)}>
												<span class="tech-toggle" class:expanded={expandedTechEvents.has(event.id)}>&#9658;</span>
												<span class="tech-title">{event.title}</span>
											</button>

											{#if expandedTechEvents.has(event.id)}
												<div class="tech-body">
													<header class="event-header">
														<span class="event-date">{event.date}</span>
														<div class="event-tags">
															{#each getEventTags(event) as tag}
																<span class="event-type" data-type={tag}>{formatTagLabel(tag)}</span>
															{/each}
														</div>
													</header>
													<p class="event-summary">{event.summary}</p>
													<div class="event-content">
														{#each event.content.split('\n\n') as paragraph}
															{#if paragraph.startsWith('- ')}
																<ul class="event-list">
																	{#each paragraph.split('\n') as item}
																		{#if item.startsWith('- ')}
																			<li>{@html item.slice(2).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</li>
																		{/if}
																	{/each}
																</ul>
															{:else}
																<p>{@html paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</p>
															{/if}
														{/each}
													</div>
												</div>
											{/if}
										</div>
									{:else}
										<!-- Regular event (not collapsible) -->
										<section class="event" id={event.id} data-primary-type={getPrimaryTag(event)}>
											<header class="event-header">
												<span class="event-date">{event.date}</span>
												<div class="event-tags">
													{#each getEventTags(event) as tag}
														<span class="event-type" data-type={tag}>{formatTagLabel(tag)}</span>
													{/each}
												</div>
											</header>
											<h3 class="event-title">{event.title}</h3>
											<p class="event-summary">{event.summary}</p>
											<div class="event-content">
												{#each event.content.split('\n\n') as paragraph}
													{#if paragraph.startsWith('- ')}
														<ul class="event-list">
															{#each paragraph.split('\n') as item}
																{#if item.startsWith('- ')}
																	<li>{@html item.slice(2).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</li>
																{/if}
															{/each}
														</ul>
													{:else}
														<p>{@html paragraph.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>')}</p>
													{/if}
												{/each}
											</div>
										</section>
									{/if}
								{/each}
							</div>

							<!-- Era Links (collapsible) -->
							{#if era.links && Object.keys(era.links).length > 0}
								<div class="era-links-section">
									<button class="era-links-header" onclick={() => toggleEraLinks(era.id)}>
										<span class="links-toggle" class:expanded={expandedEraLinks.has(era.id)}>&#9658;</span>
										<span class="links-title">Sources & Links</span>
									</button>

									{#if expandedEraLinks.has(era.id)}
										<div class="era-links-body">
											{#each Object.entries(era.links).sort(([a], [b]) => Number(a) - Number(b)) as [num, link]}
												{@const urls = link.url.split(',').map(u => u.trim()).filter(u => u)}
												<div class="link-entry">
													<div class="link-entry-row">
														<button class="link-label-btn" onclick={() => scrollToEventByEntry(era, num)}>Entry {num}:</button>
														{#if link.tag}
															<span class="link-tag" data-type={link.tag}>{formatTagLabel(link.tag)}</span>
														{/if}
														{#if urls[0]}
															<a href={urls[0]} target="_blank" rel="noopener noreferrer" class="link-url">{urls[0]}</a>
														{/if}
													</div>
													{#if urls.length > 1}
														{#each urls.slice(1) as url}
															<div class="link-entry-row link-continuation">
																<a href={url} target="_blank" rel="noopener noreferrer" class="link-url">{url}</a>
															</div>
														{/each}
													{/if}
												</div>
											{/each}
										</div>
									{/if}
								</div>
							{/if}
						{/if}
					</article>
				{/each}
			</section>

			<footer class="article-footer">
				<p class="footer-quote">"The wheel turns. The +1 remains."</p>
				<p>This is where the timeline stops, because this is where we are.</p>
				<p class="footer-question">
					What new WHY-frameworks will emerge? Will they be adequate to the challenge?
					Will they help us hold the tension, or collapse us into one of the failure modes?
				</p>
			</footer>
		</article>

		<aside class="sidebar">
			<TimelineWidget {activeEraIndex} {activeEventId} />
		</aside>
		</div>
	</main>
</div>

<style>
	.page {
		min-height: 100vh;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: var(--spacing-xl) var(--spacing-xl);
		max-width: var(--page-width);
		margin: 0 auto;
		border-bottom: 1px solid var(--color-border-light);
	}

	.site-title {
		font-size: 2rem;
		font-weight: 400;
		margin-bottom: var(--spacing-xs);
	}

	.site-subtitle {
		font-size: 1rem;
		color: var(--color-text-muted);
		margin: 0;
	}

	.toc-sidebar {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 280px;
		padding: 6rem 1rem 2rem 1.5rem;
		overflow-y: auto;
		z-index: 100;
		background: var(--color-bg);
		/* Hide scrollbar */
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
	}

	.toc-sidebar::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera */
	}

	.main {
		padding: var(--spacing-2xl) var(--spacing-xl);
		padding-left: 320px;
	}

	.main-grid {
		display: flex;
		justify-content: center;
		gap: var(--spacing-2xl);
		align-items: flex-start;
	}

	.article {
		max-width: var(--content-width);
		flex-shrink: 0;
	}

	.sidebar {
		position: sticky;
		top: 2rem;
		width: 540px;
		height: fit-content;
		flex-shrink: 0;
	}

	@media (max-width: 1700px) {
		.toc-sidebar {
			width: 250px;
		}

		.main {
			padding-left: 290px;
		}

		.sidebar {
			width: 480px;
		}
	}

	@media (max-width: 1500px) {
		.toc-sidebar {
			width: 220px;
		}

		.main {
			padding-left: 260px;
		}

		.sidebar {
			width: 420px;
		}
	}

	@media (max-width: 1200px) {
		.toc-sidebar {
			display: none;
		}

		.main {
			padding-left: var(--spacing-xl);
		}
	}

	@media (max-width: 900px) {
		.main-grid {
			flex-direction: column;
		}

		.sidebar {
			display: none;
		}
	}

	.intro-section {
		margin-bottom: var(--spacing-2xl);
	}

	.intro-lead {
		font-size: 1.15rem;
		line-height: 1.8;
		margin-bottom: var(--spacing-lg);
	}

	/* Era Navigation */
	.era-nav {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-2xl);
		padding: var(--spacing-lg) 0;
		border-top: 1px solid var(--color-border-light);
		border-bottom: 1px solid var(--color-border-light);
	}

	.era-nav-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: var(--spacing-xs) var(--spacing-md);
		background: none;
		border: 1px solid var(--color-border);
		border-radius: 20px;
		font-family: var(--font-sans);
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: all var(--transition-fast);
	}

	.era-nav-item:hover {
		background: var(--color-text-primary);
		border-color: var(--color-text-primary);
		color: var(--color-bg);
	}

	.era-nav-number {
		font-weight: 600;
	}

	.era-nav-title {
		text-transform: capitalize;
	}

	/* Timeline Section */
	.timeline-section {
		margin-top: var(--spacing-2xl);
	}

	/* Era Styles */
	.era {
		margin-bottom: var(--spacing-lg);
		padding-left: var(--spacing-lg);
		border-left: 3px solid #a85a5a;
	}

	.era.expanded {
		border-left-color: transparent;
		margin-bottom: var(--spacing-2xl);
		padding-bottom: var(--spacing-2xl);
		padding-left: 0;
		border-bottom: 1px solid var(--color-border-light);
	}

	.era.expanded:last-child {
		border-bottom: none;
	}

	.era-collapsed-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.5rem 0;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
	}

	.era.expanded .era-collapsed-header {
		display: none;
	}

	.era-toggle {
		font-size: 0.65rem;
		color: var(--color-text-muted);
		transition: transform 200ms ease;
		display: inline-block;
	}

	.era-toggle.expanded {
		transform: rotate(90deg);
	}

	.era-collapsed-title {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		transition: color 150ms ease;
	}

	.era-collapsed-header:hover .era-collapsed-title {
		color: var(--color-text-primary);
	}

	.era-header {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		margin-bottom: var(--spacing-xl);
	}

	.era-header-toggle {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.25rem;
		margin-top: 0.1rem;
		flex-shrink: 0;
	}

	.era-header-toggle:hover .era-toggle {
		color: var(--color-text-primary);
	}

	.era-header-content {
		flex: 1;
	}

	.era-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
	}

	.era-label {
		font-family: var(--font-sans);
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: var(--color-text-muted);
	}

	.era-date {
		font-family: var(--font-sans);
		font-size: 0.75rem;
		color: var(--color-text-muted);
	}

	.era-title {
		font-size: 1.75rem;
		font-weight: 400;
		margin-bottom: var(--spacing-md);
	}

	.era-description {
		font-style: italic;
		color: var(--color-text-secondary);
		line-height: 1.7;
		margin: 0;
	}

	/* Event Styles */
	.event {
		margin-bottom: var(--spacing-xl);
		padding-left: var(--spacing-lg);
		border-left: 2px solid var(--color-border-light);
	}

	.event:hover {
		border-left-color: var(--color-text-primary);
	}

	.event-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-sm);
	}

	.event-date {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}

	.event-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
	}

	.event-type {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 2px 8px;
		border-radius: 3px;
		background: var(--color-bg-alt);
		color: var(--color-text-secondary);
	}

	/* Core Event Types */
	.event-type[data-type="hammerfall"] {
		background: #2d2d2d;
		color: #c08080;
	}

	.event-type[data-type="collapse"] {
		background: #4a4a4a;
		color: #d0d0d0;
	}

	.event-type[data-type="stress"] {
		background: #f0e2d0;
		color: #a67c52;
	}

	.event-type[data-type="expansion"] {
		background: #f5ecd4;
		color: #b8942a;
	}

	.event-type[data-type="transition"] {
		background: #e8e8e8;
		color: #6a6a6a;
	}

	.event-type[data-type="recovery"] {
		background: #f8f8f8;
		color: #808080;
	}

	.event-type[data-type="parallel"] {
		background: #e8e8e8;
		color: #707070;
	}

	/* Domain Tags */
	.event-type[data-type="tech"] {
		background: #e0e5e8;
		color: #4a5a68;
	}

	.event-type[data-type="cognitive"] {
		background: #ebe4f0;
		color: #6a5a7a;
	}

	.event-type[data-type="climate"] {
		background: #e4eaef;
		color: #5a6878;
	}

	.event-type[data-type="migration"] {
		background: #f2ebe0;
		color: #8a7a60;
	}

	.event-type[data-type="external"] {
		background: #3a3235;
		color: #c0a8a8;
	}

	/* Outcome Tags */
	.event-type[data-type="gain"] {
		background: #f5ecc0;
		color: #a08820;
	}

	.event-type[data-type="lost"] {
		background: #3d3d3d;
		color: #909090;
	}

	/* Legacy Types */
	.event-type[data-type="fragmentation"] {
		background: #5a5a5a;
		color: #b0b0b0;
	}

	.event-type[data-type="tension"] {
		background: #f5ecc8;
		color: #9a8530;
	}

	.event-type[data-type="adaptation"] {
		background: #e8eef2;
		color: #5a6a78;
	}

	.event-type[data-type="collision"] {
		background: #ebe2d8;
		color: #8a6a50;
	}

	.event-title {
		font-size: 1.25rem;
		font-weight: 500;
		margin-bottom: var(--spacing-xs);
	}

	.event-summary {
		font-style: italic;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-md);
	}

	.event-content {
		color: var(--color-text-primary);
		line-height: 1.75;
	}

	.event-content p {
		margin-bottom: var(--spacing-md);
	}

	.event-content p:last-child {
		margin-bottom: 0;
	}

	.event-list {
		margin: var(--spacing-md) 0;
		padding-left: var(--spacing-lg);
	}

	.event-list li {
		margin-bottom: var(--spacing-sm);
		line-height: 1.6;
	}

	/* Collapsible Tech Event Styles */
	.tech-event {
		margin-bottom: var(--spacing-md);
		border: 1px solid var(--color-border-light);
		border-left: 3px solid #6b7b8a;
		border-radius: 6px;
		overflow: hidden;
	}

	.tech-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.75rem 1rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 150ms ease;
	}

	.tech-header:hover {
		background: var(--color-bg-alt);
	}

	.tech-toggle {
		font-size: 0.65rem;
		color: var(--color-text-muted);
		transition: transform 200ms ease;
		display: inline-block;
	}

	.tech-toggle.expanded {
		transform: rotate(90deg);
	}

	.tech-title {
		font-family: var(--font-sans);
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.tech-body {
		padding: var(--spacing-md) var(--spacing-lg);
		border-top: 1px solid var(--color-border-light);
		background: var(--color-bg-alt);
	}

	.tech-body .event-header {
		margin-bottom: var(--spacing-sm);
	}

	.tech-body .event-summary {
		font-size: 0.95rem;
	}

	.tech-body .event-content {
		font-size: 0.95rem;
	}

	/* Footer */
	.article-footer {
		margin-top: var(--spacing-2xl);
		padding-top: var(--spacing-2xl);
		border-top: 1px solid var(--color-border-light);
		text-align: center;
	}

	.footer-quote {
		font-size: 1.5rem;
		font-style: italic;
		margin-bottom: var(--spacing-lg);
	}

	.footer-question {
		font-style: italic;
		color: var(--color-text-secondary);
		max-width: 500px;
		margin: var(--spacing-lg) auto 0;
	}

	/* ===== ERA SUMMARY SECTION ===== */
	.era-summary-section {
		margin: var(--spacing-lg) 0;
		border: 1px solid var(--color-border-light);
		border-left: 3px solid #8b7355;
		border-radius: 6px;
		overflow: hidden;
		background: var(--color-bg);
	}

	.era-summary-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.85rem 1rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 150ms ease;
	}

	.era-summary-header:hover {
		background: var(--color-bg-alt);
	}

	.summary-toggle {
		font-size: 0.65rem;
		color: #8b7355;
		transition: transform 200ms ease;
		display: inline-block;
	}

	.summary-toggle.expanded {
		transform: rotate(90deg);
	}

	.summary-title {
		font-family: var(--font-sans);
		font-size: 0.9rem;
		font-weight: 600;
		color: #8b7355;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.era-summary-body {
		padding: var(--spacing-lg);
		border-top: 1px solid var(--color-border-light);
		background: linear-gradient(to bottom, var(--color-bg-alt), var(--color-bg));
	}

	.summary-stats {
		display: flex;
		gap: 1rem;
		margin-bottom: var(--spacing-lg);
		flex-wrap: wrap;
	}

	.stat-card {
		flex: 1;
		min-width: 140px;
		padding: 1rem;
		border-radius: 8px;
		text-align: center;
		border: 1px solid var(--color-border-light);
	}

	.stat-card.discovered {
		background: #e8f5e9;
		border-color: #a5d6a7;
	}

	.stat-card.recoverable {
		background: #fff3e0;
		border-color: #ffcc80;
	}

	.stat-card.lost {
		background: #ffebee;
		border-color: #ef9a9a;
	}

	.stat-label {
		display: block;
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
		margin-bottom: 0.35rem;
	}

	.stat-card.discovered .stat-label { color: #2e7d32; }
	.stat-card.recoverable .stat-label { color: #ef6c00; }
	.stat-card.lost .stat-label { color: #c62828; }

	.stat-value {
		font-family: var(--font-sans);
		font-size: 1.35rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.stat-card.discovered .stat-value { color: #1b5e20; }
	.stat-card.recoverable .stat-value { color: #e65100; }
	.stat-card.lost .stat-value { color: #b71c1c; }

	.summary-sections {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: var(--spacing-lg);
	}

	.summary-block {
		background: var(--color-bg);
		border: 1px solid var(--color-border-light);
		border-radius: 6px;
		padding: 1rem;
	}

	.summary-block-title {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		color: var(--color-text-secondary);
		margin-bottom: 0.75rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid var(--color-border-light);
	}

	.summary-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.summary-list li {
		font-size: 0.9rem;
		line-height: 1.5;
		padding: 0.4rem 0;
		padding-left: 1.25rem;
		position: relative;
		color: var(--color-text-secondary);
	}

	.summary-list li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: var(--color-text-muted);
	}

	.summary-list.recoverable-list li::before {
		content: '◆';
		color: #ef6c00;
	}

	.summary-list.ai-list li::before {
		content: '⚡';
		color: #1976d2;
	}

	.summary-list.lost-list li::before {
		content: '✗';
		color: #c62828;
	}

	/* ===== ERA LINKS SECTION ===== */
	.era-links-section {
		margin: var(--spacing-lg) 0;
		border: 1px solid var(--color-border-light);
		border-left: 3px solid #5a7a8a;
		border-radius: 6px;
		overflow: hidden;
		background: var(--color-bg);
	}

	.era-links-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.85rem 1rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 150ms ease;
	}

	.era-links-header:hover {
		background: var(--color-bg-alt);
	}

	.links-toggle {
		font-size: 0.65rem;
		color: #5a7a8a;
		transition: transform 200ms ease;
		display: inline-block;
	}

	.links-toggle.expanded {
		transform: rotate(90deg);
	}

	.links-title {
		font-family: var(--font-sans);
		font-size: 0.9rem;
		font-weight: 600;
		color: #5a7a8a;
		text-transform: uppercase;
		letter-spacing: 0.03em;
	}

	.era-links-body {
		padding: var(--spacing-md) var(--spacing-lg);
		border-top: 1px solid var(--color-border-light);
		background: var(--color-bg-alt);
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.link-entry {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--color-border-light);
	}

	.link-entry:last-child {
		border-bottom: none;
	}

	.link-entry-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.link-entry-row.link-continuation {
		padding-left: calc(70px + 0.5rem); /* Align with first URL (Entry X: width + gap) */
	}

	.link-label-btn {
		font-family: var(--font-sans);
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		min-width: 70px;
		flex-shrink: 0;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-align: left;
		transition: color 150ms ease;
	}

	.link-label-btn:hover {
		color: #5a7a8a;
		text-decoration: underline;
	}

	.link-tag {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 2px 8px;
		border-radius: 3px;
		background: var(--color-bg-alt);
		color: var(--color-text-secondary);
	}

	/* Link tag colors (reuse event-type styles) */
	.link-tag[data-type="tech"] { background: #e0e5e8; color: #4a5a68; }
	.link-tag[data-type="cognitive"] { background: #ebe4f0; color: #6a5a7a; }
	.link-tag[data-type="climate"] { background: #e4eaef; color: #5a6878; }
	.link-tag[data-type="migration"] { background: #f2ebe0; color: #8a7a60; }
	.link-tag[data-type="external"] { background: #3a3235; color: #c0a8a8; }
	.link-tag[data-type="hammerfall"] { background: #2d2d2d; color: #c08080; }
	.link-tag[data-type="collapse"] { background: #4a4a4a; color: #d0d0d0; }
	.link-tag[data-type="expansion"] { background: #f5ecd4; color: #b8942a; }

	.link-url {
		font-family: var(--font-sans);
		font-size: 0.85rem;
		color: #5a7a8a;
		text-decoration: none;
		word-break: break-all;
	}

	.link-url:hover {
		text-decoration: underline;
	}

	/* ===== MOBILE TOC TOGGLE & OVERLAY ===== */
	.mobile-toc-toggle {
		display: none;
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 1001;
		width: 44px;
		height: 44px;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	}

	.hamburger-icon {
		display: flex;
		flex-direction: column;
		gap: 4px;
		width: 20px;
	}

	.hamburger-icon span {
		display: block;
		height: 2px;
		background: var(--color-text-primary);
		border-radius: 1px;
		transition: all 200ms ease;
	}

	.hamburger-icon.open span:nth-child(1) {
		transform: rotate(45deg) translate(4px, 4px);
	}

	.hamburger-icon.open span:nth-child(2) {
		opacity: 0;
	}

	.hamburger-icon.open span:nth-child(3) {
		transform: rotate(-45deg) translate(4px, -4px);
	}

	.mobile-toc-overlay {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 999;
	}

	.mobile-toc-header {
		display: none;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.25rem;
		border-bottom: 1px solid var(--color-border-light);
		background: var(--color-bg);
	}

	.mobile-toc-title {
		font-family: var(--font-sans);
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.mobile-toc-close {
		background: none;
		border: none;
		font-size: 1.5rem;
		color: var(--color-text-muted);
		cursor: pointer;
		padding: 0.25rem;
		line-height: 1;
	}

	.mobile-toc-close:hover {
		color: var(--color-text-primary);
	}

	/* ===== RESPONSIVE BREAKPOINTS ===== */

	/* Tablet - hide widget, keep TOC on left */
	@media (max-width: 1200px) {
		.toc-sidebar {
			display: none;
		}

		.main {
			padding-left: var(--spacing-xl);
		}

		/* Show mobile toggle */
		.mobile-toc-toggle {
			display: flex;
		}

		.mobile-toc-overlay {
			display: block;
		}

		.mobile-toc-header {
			display: flex;
		}

		/* Mobile TOC sidebar */
		.toc-sidebar {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			bottom: 0;
			width: 320px;
			max-width: 85vw;
			background: var(--color-bg);
			z-index: 1000;
			transform: translateX(-100%);
			transition: transform 300ms ease;
			box-shadow: 2px 0 16px rgba(0,0,0,0.15);
			padding-top: 0;
		}

		.toc-sidebar.mobile-open {
			transform: translateX(0);
		}
	}

	/* Mobile */
	@media (max-width: 900px) {
		.main-grid {
			flex-direction: column;
		}

		.sidebar {
			display: none;
		}
	}

	@media (max-width: 768px) {
		.header {
			flex-direction: column;
			gap: var(--spacing-md);
			padding: var(--spacing-lg);
			padding-left: 70px; /* Space for mobile toggle */
		}

		.nav {
			padding-top: 0;
		}

		.main {
			padding: var(--spacing-lg);
		}

		.site-title {
			font-size: 1.5rem;
		}

		.era-nav {
			gap: var(--spacing-xs);
		}

		.era-nav-title {
			display: none;
		}

		.article {
			max-width: 100%;
		}

		.era-title {
			font-size: 1.35rem;
		}

		.event-title {
			font-size: 1.1rem;
		}

		/* Adjust mobile TOC width */
		.toc-sidebar {
			width: 280px;
		}
	}

	@media (max-width: 480px) {
		.header {
			padding: var(--spacing-md);
			padding-left: 60px;
		}

		.main {
			padding: var(--spacing-md);
		}

		.site-title {
			font-size: 1.25rem;
		}

		.site-subtitle {
			font-size: 0.85rem;
		}

		.intro-lead {
			font-size: 1rem;
		}

		.era-nav {
			justify-content: center;
		}

		.era-nav-item {
			padding: var(--spacing-xs) var(--spacing-sm);
		}

		.mobile-toc-toggle {
			width: 40px;
			height: 40px;
			top: 0.75rem;
			left: 0.75rem;
		}
	}
</style>
