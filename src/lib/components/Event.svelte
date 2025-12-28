<script lang="ts">
	import type { TimelineEvent, EventType } from '$lib/data/types';
	import ImagePlaceholder from './ImagePlaceholder.svelte';

	interface Props {
		event: TimelineEvent;
	}

	let { event }: Props = $props();

	// Tech events are collapsed by default, others always expanded
	let techExpanded = $state(false);

	const typeLabels: Record<EventType, string> = {
		// Core Event Types
		hammerfall: 'HAMMERFALL',
		collapse: 'COLLAPSE',
		stress: 'STRESS',
		expansion: 'EXPANSION',
		transition: 'TRANSITION',
		recovery: 'RECOVERY',
		parallel: 'PARALLEL',
		// Domain Tags
		tech: 'TECH',
		cognitive: 'COGNITIVE',
		climate: 'CLIMATE',
		migration: 'MIGRATION',
		external: 'EXTERNAL',
		// Outcome Tags
		gain: 'GAIN',
		lost: 'LOST',
		// Legacy types
		fragmentation: 'FRAGMENTATION',
		tension: 'TENSION',
		adaptation: 'ADAPTATION',
		collision: 'COLLISION'
	};

	// Get tags from event (supports both new tags array and legacy type field)
	function getEventTags(event: TimelineEvent): EventType[] {
		return event.tags ?? (event.type ? [event.type] : []);
	}

	// Get primary tag (first tag) for border color styling
	function getPrimaryTag(event: TimelineEvent): EventType | undefined {
		const tags = getEventTags(event);
		return tags[0];
	}

	// Check if event contains tech tag (for collapsible behavior)
	function containsTechTag(event: TimelineEvent): boolean {
		const tags = getEventTags(event);
		return tags.includes('tech');
	}

	function formatContent(content: string): string {
		// Convert markdown-style bold to HTML
		let formatted = content.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
		// Convert markdown-style lists
		formatted = formatted.replace(/^- (.+)$/gm, '<li>$1</li>');
		// Wrap consecutive li elements in ul
		formatted = formatted.replace(/(<li>.*<\/li>\n?)+/g, (match) => `<ul>${match}</ul>`);
		// Convert double newlines to paragraph breaks
		formatted = formatted.split('\n\n').map(p => {
			if (p.startsWith('<ul>') || p.startsWith('<li>')) return p;
			return `<p>${p}</p>`;
		}).join('');
		return formatted;
	}

	function toggleTechExpand() {
		techExpanded = !techExpanded;
	}
</script>

{#if containsTechTag(event)}
	<!-- Collapsible tech event -->
	<article class="event tech-collapsible" data-primary-type={getPrimaryTag(event)} class:expanded={techExpanded}>
		<button class="tech-header" onclick={toggleTechExpand}>
			<span class="tech-toggle" class:expanded={techExpanded}>&#9658;</span>
			<span class="tech-title">{event.title}</span>
		</button>

		{#if techExpanded}
			<div class="event-body">
				<header class="event-header-inner">
					<div class="event-tags">
						{#each getEventTags(event) as tag}
							<span class="event-type" data-type={tag}>
								{typeLabels[tag]}
							</span>
						{/each}
					</div>
					<div class="event-date">{event.date}</div>
				</header>
				<p class="event-summary">{event.summary}</p>

				{#if event.imagePlaceholder}
					<ImagePlaceholder description={event.imagePlaceholder} />
				{/if}

				<div class="event-text">
					{@html formatContent(event.content)}
				</div>
			</div>
		{/if}
	</article>
{:else}
	<!-- Regular event (may have multiple tags) -->
	<article class="event" data-primary-type={getPrimaryTag(event)}>
		<header class="event-header">
			<div class="event-tags">
				{#each getEventTags(event) as tag}
					<span class="event-type" data-type={tag}>
						{typeLabels[tag]}
					</span>
				{/each}
			</div>
			<div class="event-date">{event.date}</div>
		</header>

		<div class="event-body">
			<h3 class="event-title">{event.title}</h3>
			<p class="event-summary">{event.summary}</p>

			{#if event.imagePlaceholder}
				<ImagePlaceholder description={event.imagePlaceholder} />
			{/if}

			<div class="event-text">
				{@html formatContent(event.content)}
			</div>
		</div>
	</article>
{/if}

<style>
	.event {
		background: var(--color-bg-card);
		border-radius: 12px;
		border: 1px solid var(--color-bg-tertiary);
		border-left: 4px solid var(--color-accent-gold-dim);
		overflow: hidden;
		transition: all var(--transition-normal);
		margin-bottom: var(--spacing-xl);
	}

	.event:hover {
		border-color: var(--color-accent-gold-dim);
		border-left-color: var(--color-accent-gold);
	}

	/* Border colors by primary tag (first tag in array) */
	.event[data-primary-type="hammerfall"] { border-left-color: #2d2d2d; }
	.event[data-primary-type="collapse"] { border-left-color: #4a4a4a; }
	.event[data-primary-type="stress"] { border-left-color: #a67c52; }
	.event[data-primary-type="expansion"] { border-left-color: var(--color-expansion); }
	.event[data-primary-type="transition"] { border-left-color: #8a8a8a; }
	.event[data-primary-type="recovery"] { border-left-color: #a0a0a0; }
	.event[data-primary-type="parallel"] { border-left-color: #707070; }
	.event[data-primary-type="tech"] { border-left-color: #6b7b8a; }
	.event[data-primary-type="cognitive"] { border-left-color: #6a5a7a; }
	.event[data-primary-type="climate"] { border-left-color: #5a6878; }
	.event[data-primary-type="migration"] { border-left-color: #8a7a60; }
	.event[data-primary-type="external"] { border-left-color: #3a3235; }
	.event[data-primary-type="gain"] { border-left-color: #a08820; }
	.event[data-primary-type="lost"] { border-left-color: #3d3d3d; }
	/* Legacy type border colors */
	.event[data-primary-type="fragmentation"] { border-left-color: #5a5a5a; }
	.event[data-primary-type="tension"] { border-left-color: #9a8530; }
	.event[data-primary-type="adaptation"] { border-left-color: #5a6a78; }
	.event[data-primary-type="collision"] { border-left-color: #8a6a50; }

	.event-header {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
		padding: var(--spacing-lg) var(--spacing-xl);
		background: var(--color-bg-secondary);
		border-bottom: 1px solid var(--color-bg-tertiary);
	}

	.event-date {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-accent-gold);
		letter-spacing: 0.02em;
	}

	.event-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.event-type {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.2em;
		padding: 6px 12px;
		border-radius: 4px;
		white-space: nowrap;
		text-transform: uppercase;
	}

	/* ===== CORE EVENT TYPE BADGES (7) ===== */

	.event-type[data-type="hammerfall"] {
		background: #2d2d2d;
		color: #c08080;
		animation: pulse 2s infinite;
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

	/* ===== DOMAIN TAG BADGES (5) ===== */

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

	/* ===== OUTCOME TAG BADGES (2) ===== */

	.event-type[data-type="gain"] {
		background: #f5ecc0;
		color: #a08820;
	}

	.event-type[data-type="lost"] {
		background: #3d3d3d;
		color: #909090;
	}

	/* ===== LEGACY TYPE BADGES (4) ===== */

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

	/* Collapsible tech event styles */
	.tech-collapsible {
		background: var(--color-bg-card);
		border-radius: 8px;
		border: 1px solid var(--color-bg-tertiary);
		border-left: 4px solid #6b7b8a;
		margin-bottom: var(--spacing-md);
		overflow: hidden;
	}

	.tech-header {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		width: 100%;
		padding: 0.875rem 1.25rem;
		background: none;
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background 150ms ease;
	}

	.tech-header:hover {
		background: var(--color-bg-secondary);
	}

	.tech-toggle {
		font-size: 0.7rem;
		color: var(--color-text-muted);
		transition: transform 200ms ease;
		display: inline-block;
	}

	.tech-toggle.expanded {
		transform: rotate(90deg);
	}

	.tech-title {
		font-family: var(--font-sans);
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.tech-collapsible .event-body {
		border-top: 1px solid var(--color-bg-tertiary);
	}

	.event-header-inner {
		display: flex;
		align-items: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
	}

	.tech-collapsible .event-date {
		font-family: var(--font-serif);
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-accent-gold);
	}

	.tech-collapsible .event-summary {
		font-family: var(--font-serif);
		font-size: 1.1rem;
		color: var(--color-accent-gold);
		font-style: italic;
		margin-bottom: var(--spacing-lg);
		line-height: 1.5;
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.7; }
	}

	.event-body {
		padding: var(--spacing-xl);
	}

	.event-title {
		font-family: var(--font-serif);
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-sm);
		line-height: 1.2;
	}

	.event-summary {
		font-family: var(--font-serif);
		font-size: 1.3rem;
		color: var(--color-accent-gold);
		font-style: italic;
		margin-bottom: var(--spacing-lg);
		line-height: 1.5;
	}

	.event-text {
		font-family: var(--font-sans);
		font-size: 1.1rem;
		line-height: 1.9;
		color: var(--color-text-secondary);
		text-align: left;
	}

	.event-text :global(p) {
		margin-bottom: var(--spacing-lg);
	}

	.event-text :global(p:last-child) {
		margin-bottom: 0;
	}

	.event-text :global(strong) {
		color: var(--color-text-primary);
		font-weight: 600;
	}

	.event-text :global(ul) {
		list-style: none;
		padding: 0;
		margin: var(--spacing-lg) 0;
	}

	.event-text :global(li) {
		padding-left: var(--spacing-xl);
		position: relative;
		margin-bottom: var(--spacing-md);
		font-size: 1.05rem;
	}

	.event-text :global(li::before) {
		content: '—';
		position: absolute;
		left: 0;
		color: var(--color-accent-gold);
		font-weight: 600;
	}

	@media (max-width: 768px) {
		.event-header {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-sm);
		}

		.event-body {
			padding: var(--spacing-lg);
		}

		.event-title {
			font-size: 1.5rem;
		}

		.event-summary {
			font-size: 1.1rem;
		}

		.event-text {
			font-size: 1rem;
		}
	}
</style>
