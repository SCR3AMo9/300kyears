<script lang="ts">
	import { timelineData as eras } from '$lib/data/timeline';
	import type { EventType } from '$lib/data/types';

	interface Props {
		activeEraIndex: number;
		activeEventId?: string;
	}

	let { activeEraIndex = 0, activeEventId = '' }: Props = $props();

	// Tag display order: Core Event Types -> Domain Tags -> Outcome Tags -> Legacy
	const TAG_ORDER: EventType[] = [
		// Core Event Types (severity order)
		'hammerfall', 'collapse', 'stress', 'expansion', 'transition', 'recovery', 'parallel',
		// Domain Tags
		'tech', 'cognitive', 'climate', 'migration', 'external',
		// Outcome Tags
		'gain', 'lost',
		// Legacy types (will be phased out)
		'fragmentation', 'tension', 'adaptation', 'collision'
	];

	const TAG_LABELS: Record<EventType, string> = {
		hammerfall: 'HMR', collapse: 'COL', stress: 'STR', expansion: 'EXP',
		transition: 'TRN', recovery: 'RCV', parallel: 'PAR',
		tech: 'TCH', cognitive: 'COG', climate: 'CLM', migration: 'MIG', external: 'EXT',
		gain: 'GAN', lost: 'LST',
		// Legacy
		fragmentation: 'FRG', tension: 'TEN', adaptation: 'ADP', collision: 'CLS'
	};

	// Static era metadata (year, population)
	const eraMetadata = [
		{ year: '300,000 BCE', population: '10,000' },
		{ year: '42,000 BCE', population: '100,000' },
		{ year: '12,000 BCE', population: '5,000,000' },
		{ year: '6,000 BCE', population: '50,000,000' },
		{ year: '4,000 BCE', population: '100,000,000' },
		{ year: '3,200 BCE', population: '80,000,000' },
		{ year: '2,500 BCE', population: '200,000,000' },
		{ year: '0 CE', population: '300,000,000' },
		{ year: '1,000 CE', population: '400,000,000' },
		{ year: '1,500 CE', population: '1,000,000,000' },
		{ year: '2025 CE', population: '8,000,000,000' }
	];

	// Curated baseline values for each era (hybrid approach)
	// These provide the core shape, tags provide micro-adjustments
	// WHAT: beliefs, first principles, what we think is true
	// WHY: questioning, meta-cognition, meaning-making
	// HOW: practical techniques, tools, survival methods
	const ERA_BASELINES = [
		// Era 1: Hardware Period - basic instincts, survival HOW, minimal WHAT/WHY
		{ what: 10, why: 5, how: 25 },
		// Era 2: Symbolic Explosion - major WHAT/WHY breakthrough
		{ what: 45, why: 55, how: 40 },
		// Era 3: Neolithic Revolution - WHY rises with agriculture questioning
		{ what: 55, why: 65, how: 55 },
		// Era 4: Meaning Makers - peak WHY, strong WHAT
		{ what: 70, why: 80, how: 65 },
		// Era 5: First Writing - WHAT codified, HOW advances
		{ what: 75, why: 75, how: 72 },
		// Era 6: Bronze Age Collapse - crisis drops all, especially WHY
		{ what: 55, why: 50, how: 55 },
		// Era 7: Axial Age - WHY peaks, philosophical revolution
		{ what: 85, why: 95, how: 70 },
		// Era 8: Classical Period - balanced high
		{ what: 80, why: 85, how: 78 },
		// Era 9: Medieval - WHY dips (dogma), WHAT stable
		{ what: 75, why: 70, how: 68 },
		// Era 10: Scientific Revolution - HOW explodes, WHY transforms
		{ what: 85, why: 80, how: 95 },
		// Era 11: Now - HOW dominates, WHY drops (distraction age)
		{ what: 70, why: 45, how: 100 }
	];

	// Tag weights for micro-adjustments within eras
	const TAG_MODIFIERS = {
		what: { cognitive: 0.5, transition: 0.3, expansion: 0.2, parallel: 0.2, adaptation: 0.3 },
		why: { stress: 0.3, hammerfall: 0.5, collapse: 0.4, tension: 0.3, collision: 0.4, lost: 0.2 },
		how: { tech: 0.5, recovery: 0.3, migration: 0.2, climate: 0.2, external: 0.1, gain: 0.3, expansion: 0.2 }
	};

	let currentMetadata = $derived(eraMetadata[activeEraIndex] || eraMetadata[0]);
	let currentEra = $derived(eras[activeEraIndex] || eras[0]);

	// Find which era the active event belongs to
	let activeEventEraIndex = $derived(() => {
		if (!activeEventId) return -1;
		for (let i = 0; i < eras.length; i++) {
			if (eras[i].events.some(e => e.id === activeEventId)) {
				return i;
			}
		}
		return -1;
	});

	// Get cumulative tag counts up to current event (not just era)
	// Supports both new tags array and legacy type field for backward compatibility
	let cumulativeEvents = $derived(() => {
		const totals: Record<string, number> = {};
		const eventEraIdx = activeEventEraIndex();

		// If no valid active event, just count up to (but not including) current era
		if (eventEraIdx === -1) {
			for (let i = 0; i < activeEraIndex; i++) {
				const era = eras[i];
				for (let j = 0; j < era.events.length; j++) {
					const event = era.events[j];
					const eventTags = event.tags ?? (event.type ? [event.type] : []);
					eventTags.forEach(tag => {
						totals[tag] = (totals[tag] || 0) + 1;
					});
				}
			}
			return totals;
		}

		// Count events up to and including the active event
		for (let i = 0; i <= eventEraIdx; i++) {
			const era = eras[i];
			const isEventEra = i === eventEraIdx;

			if (isEventEra) {
				const activeEventIndex = era.events.findIndex(e => e.id === activeEventId);
				// Count up to and including the active event
				for (let j = 0; j <= activeEventIndex; j++) {
					const event = era.events[j];
					const eventTags = event.tags ?? (event.type ? [event.type] : []);
					eventTags.forEach(tag => {
						totals[tag] = (totals[tag] || 0) + 1;
					});
				}
			} else {
				// For past eras, count all events
				for (let j = 0; j < era.events.length; j++) {
					const event = era.events[j];
					const eventTags = event.tags ?? (event.type ? [event.type] : []);
					eventTags.forEach(tag => {
						totals[tag] = (totals[tag] || 0) + 1;
					});
				}
			}
		}
		return totals;
	});

	// Calculate tag modifier adjustment for a metric
	function getTagModifier(
		tagCounts: Record<string, number>,
		modifiers: Record<string, number>
	): number {
		let adjustment = 0;
		for (const [tag, weight] of Object.entries(modifiers)) {
			adjustment += (tagCounts[tag] || 0) * weight;
		}
		return adjustment;
	}

	// Calculate metric value: baseline + tag modifiers (capped at 100)
	function calculateMetric(
		baseline: number,
		tagCounts: Record<string, number>,
		modifiers: Record<string, number>
	): number {
		return Math.min(100, Math.max(0, baseline + getTagModifier(tagCounts, modifiers)));
	}

	// Get current era baseline values (for dot positioning on graph)
	let currentEraBaseline = $derived(ERA_BASELINES[activeEraIndex] || { what: 50, why: 50, how: 50 });
	let currentEraConsciousness = $derived(
		Math.min(100, (currentEraBaseline.what * 0.35) + (currentEraBaseline.why * 0.40) + (currentEraBaseline.how * 0.25))
	);

	// Derived WHAT/WHY/HOW/Consciousness values based on current scroll position
	let currentWhat = $derived(() => {
		const tags = cumulativeEvents();
		const baseline = ERA_BASELINES[activeEraIndex]?.what ?? 50;
		return calculateMetric(baseline, tags, TAG_MODIFIERS.what);
	});

	let currentWhy = $derived(() => {
		const tags = cumulativeEvents();
		const baseline = ERA_BASELINES[activeEraIndex]?.why ?? 50;
		return calculateMetric(baseline, tags, TAG_MODIFIERS.why);
	});

	let currentHow = $derived(() => {
		const tags = cumulativeEvents();
		const baseline = ERA_BASELINES[activeEraIndex]?.how ?? 50;
		return calculateMetric(baseline, tags, TAG_MODIFIERS.how);
	});

	// Consciousness is a weighted composite of WHAT, WHY, and HOW
	// WHY is weighted highest (meaning-making is central to consciousness)
	let currentConsciousness = $derived(() => {
		const what = currentWhat();
		const why = currentWhy();
		const how = currentHow();
		// WHY: 40%, WHAT: 35%, HOW: 25%
		return Math.min(100, (what * 0.35) + (why * 0.40) + (how * 0.25));
	});

	// Calculate graph data points using curated baselines
	let graphDataPoints = $derived(() => {
		const points: { what: number; why: number; how: number; consciousness: number }[] = [];

		// Use curated baselines for each era
		for (let eraIdx = 0; eraIdx < eras.length; eraIdx++) {
			const baseline = ERA_BASELINES[eraIdx] || { what: 50, why: 50, how: 50 };

			const what = baseline.what;
			const why = baseline.why;
			const how = baseline.how;
			const consciousness = Math.min(100, (what * 0.35) + (why * 0.40) + (how * 0.25));

			points.push({ what, why, how, consciousness });
		}

		return points;
	});

	// Generate smooth bezier curve path for a metric using derived graph data
	function getSmoothPath(metric: 'what' | 'why' | 'how' | 'consciousness'): string {
		const width = 400;
		const height = 100;
		const data = graphDataPoints();
		const svgPoints: {x: number, y: number}[] = [];

		for (let i = 0; i < data.length; i++) {
			const x = (i / (data.length - 1)) * width;
			const y = height - (data[i][metric] / 100) * height;
			svgPoints.push({x, y});
		}

		if (svgPoints.length < 2) return '';

		let path = `M ${svgPoints[0].x},${svgPoints[0].y}`;

		for (let i = 0; i < svgPoints.length - 1; i++) {
			const p0 = svgPoints[i === 0 ? i : i - 1];
			const p1 = svgPoints[i];
			const p2 = svgPoints[i + 1];
			const p3 = svgPoints[i + 2 >= svgPoints.length ? i + 1 : i + 2];

			const tension = 0.3;
			const cp1x = p1.x + (p2.x - p0.x) * tension;
			const cp1y = p1.y + (p2.y - p0.y) * tension;
			const cp2x = p2.x - (p3.x - p1.x) * tension;
			const cp2y = p2.y - (p3.y - p1.y) * tension;

			path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
		}

		return path;
	}

	// Get current position marker X based on progress through all events
	function getCurrentMarkerX(): number {
		const width = 400;
		const eventEraIdx = activeEventEraIndex();

		if (eventEraIdx === -1) {
			// Fallback to era-based position
			return (activeEraIndex / (eras.length - 1)) * width;
		}

		// Calculate position based on events within era
		const era = eras[eventEraIdx];
		const eventIndex = era.events.findIndex(e => e.id === activeEventId);

		// Total events before current era
		let totalEventsBefore = 0;
		for (let i = 0; i < eventEraIdx; i++) {
			totalEventsBefore += eras[i].events.length;
		}

		// Total events in timeline
		const totalEvents = eras.reduce((sum, e) => sum + e.events.length, 0);

		// Current position
		const currentEventPosition = totalEventsBefore + eventIndex + 1;

		return (currentEventPosition / totalEvents) * width;
	}

	// Calculate clip path for reveal animation - smooth per-event update
	let revealClipPath = $derived(() => {
		const eventEraIdx = activeEventEraIndex();

		if (eventEraIdx === -1) {
			// Fallback to era-based reveal
			return `inset(0 ${100 - ((activeEraIndex + 1) / eras.length) * 100}% 0 0)`;
		}

		// Calculate based on event progress
		const era = eras[eventEraIdx];
		const eventIndex = era.events.findIndex(e => e.id === activeEventId);

		let totalEventsBefore = 0;
		for (let i = 0; i < eventEraIdx; i++) {
			totalEventsBefore += eras[i].events.length;
		}

		const totalEvents = eras.reduce((sum, e) => sum + e.events.length, 0);
		const currentEventPosition = totalEventsBefore + eventIndex + 1;

		return `inset(0 ${100 - (currentEventPosition / totalEvents) * 100}% 0 0)`;
	});
</script>

<aside class="widget">
	<!-- Header Row -->
	<div class="widget-header">
		<div class="header-main">
			<span class="header-label">Era {currentEra.number} of {eras.length}</span>
			<h2 class="header-title">{currentEra.title}</h2>
		</div>
		<div class="header-stats">
			<div class="stat">
				<span class="stat-label">Year</span>
				<span class="stat-value">{currentMetadata.year}</span>
			</div>
			<div class="stat">
				<span class="stat-label">Population</span>
				<span class="stat-value">{currentMetadata.population}</span>
			</div>
		</div>
	</div>

	<!-- Consciousness Graph -->
	<div class="graph-section">
		<div class="graph-header">
			<span class="section-label">
				<span class="label-what">WHAT</span> · <span class="label-why">WHY</span> · <span class="label-how">HOW</span> · <span class="label-consciousness">Consciousness</span>
			</span>
		</div>
		<svg class="graph" viewBox="0 0 400 100" preserveAspectRatio="none">
			<line x1="0" y1="50" x2="400" y2="50" class="grid-line" />
			<!-- Dimmed background lines (full path preview) -->
			<path d={getSmoothPath('how')} class="graph-line how-line dimmed" fill="none" />
			<path d={getSmoothPath('what')} class="graph-line what-line dimmed" fill="none" />
			<path d={getSmoothPath('why')} class="graph-line why-line dimmed" fill="none" />
			<path d={getSmoothPath('consciousness')} class="graph-line consciousness-line dimmed" fill="none" />
			<!-- Revealed lines (clip-path based on scroll progress) -->
			<g style="clip-path: {revealClipPath()}">
				<path d={getSmoothPath('how')} class="graph-line how-line" fill="none" />
				<path d={getSmoothPath('what')} class="graph-line what-line" fill="none" />
				<path d={getSmoothPath('why')} class="graph-line why-line" fill="none" />
				<path d={getSmoothPath('consciousness')} class="graph-line consciousness-line" fill="none" />
			</g>
			<!-- Position marker -->
			<line x1={getCurrentMarkerX()} y1="0" x2={getCurrentMarkerX()} y2="100" class="position-marker" />
		</svg>
	</div>

	<!-- Era Selector -->
	<nav class="era-selector">
		{#each eras as era, i}
			<button
				class="era-dot"
				class:active={i === activeEraIndex}
				class:past={i < activeEraIndex}
				aria-label="Era {era.number}: {era.title}"
				onclick={() => {
					const element = document.getElementById(era.id);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth', block: 'start' });
					}
				}}
			>
				<span class="era-dot-number">{era.number}</span>
			</button>
		{/each}
	</nav>

	<!-- Event Tag Categories with Boxes -->
	<div class="tag-categories">
		<!-- Core Event Types -->
		<div class="tag-category">
			<div class="category-header">
				<span class="category-label">Core Event Types</span>
			</div>
			<div class="tag-rows">
				{#each ['hammerfall', 'collapse', 'stress', 'expansion', 'transition', 'recovery', 'parallel'] as tag}
					<div class="tag-row">
						<span class="tag-name" data-type={tag}>{tag}</span>
						<div class="tag-boxes">
							{#each Array(cumulativeEvents()[tag] || 0) as _, i (i)}
								<span class="tag-box filled" data-type={tag}></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Domain Tags -->
		<div class="tag-category">
			<div class="category-header">
				<span class="category-label">Domain Tags</span>
			</div>
			<div class="tag-rows">
				{#each ['tech', 'cognitive', 'climate', 'migration', 'external'] as tag}
					<div class="tag-row">
						<span class="tag-name" data-type={tag}>{tag}</span>
						<div class="tag-boxes">
							{#each Array(cumulativeEvents()[tag] || 0) as _, i (i)}
								<span class="tag-box filled" data-type={tag}></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Outcome Tags -->
		<div class="tag-category">
			<div class="category-header">
				<span class="category-label">Outcome</span>
			</div>
			<div class="tag-rows">
				{#each ['gain', 'lost'] as tag}
					<div class="tag-row">
						<span class="tag-name" data-type={tag}>{tag}</span>
						<div class="tag-boxes">
							{#each Array(cumulativeEvents()[tag] || 0) as _, i (i)}
								<span class="tag-box filled" data-type={tag}></span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</aside>

<style>
	.widget {
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: 6px;
		padding: 0.8rem;
		font-family: var(--font-sans);
		width: 100%;
	}

	/* Header */
	.widget-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.8rem;
		padding-bottom: 0.625rem;
		border-bottom: 1px solid var(--color-border-light);
	}

	.header-label {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.header-title {
		font-family: var(--font-serif);
		font-size: 1.05rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0.15rem 0 0 0;
	}

	.header-stats {
		display: flex;
		gap: 0.9rem;
		text-align: right;
	}

	.stat-label {
		display: block;
		font-size: 0.625rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.stat-value {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	/* Graph Section */
	.graph-section {
		margin-bottom: 0.8rem;
	}

	.graph-header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 0.3rem;
	}

	.section-label {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.label-what { color: #6a5acd; }
	.label-why { color: #d4af37; }
	.label-how { color: #708090; }
	.label-consciousness { color: #2d2d2d; }

	.graph {
		width: 100%;
		height: 100px;
		background: var(--color-bg-alt);
		border-radius: 4px;
	}

	.grid-line {
		stroke: var(--color-border-light);
		stroke-width: 1;
	}

	.graph-line {
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
		transition: d 0.3s ease;
	}

	.graph-line.dimmed {
		opacity: 0.15;
	}

	.what-line { stroke: #6a5acd; }
	.why-line { stroke: #d4af37; }
	.how-line { stroke: #708090; }
	.consciousness-line { stroke: #2d2d2d; stroke-width: 2.5; }

	.position-marker {
		stroke: var(--color-text-muted);
		stroke-width: 1;
		stroke-dasharray: 3,3;
	}

	/* Era Selector */
	.era-selector {
		display: flex;
		justify-content: space-between;
		gap: 0.15rem;
		margin-top: 0.625rem;
		padding-top: 0.625rem;
		border-top: 1px solid var(--color-border-light);
	}

	.era-dot {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid var(--color-border);
		background: var(--color-bg);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 150ms ease;
	}

	.era-dot:hover {
		border-color: var(--color-text-primary);
	}

	.era-dot.past {
		background: var(--color-bg-alt);
		border-color: var(--color-text-muted);
	}

	.era-dot.active {
		background: var(--color-text-primary);
		border-color: var(--color-text-primary);
	}

	.era-dot.active .era-dot-number {
		color: var(--color-bg);
	}

	.era-dot-number {
		font-size: 0.55rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	/* ===== TAG CATEGORIES WITH BOXES ===== */
	.tag-categories {
		margin-top: 0.625rem;
		padding-top: 0.625rem;
		border-top: 1px solid var(--color-border-light);
		display: flex;
		flex-direction: column;
		gap: 0.625rem;
	}

	.tag-category {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.category-header {
		margin-bottom: 0.15rem;
	}

	.category-label {
		font-size: 0.55rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.tag-rows {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.tag-row {
		display: flex;
		align-items: center;
		gap: 0.3rem;
	}

	.tag-name {
		font-family: var(--font-sans);
		font-size: 0.5rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		padding: 3px 5px;
		border-radius: 2px;
		background: var(--color-bg-alt);
		color: var(--color-text-secondary);
		width: 62px;
		box-sizing: border-box;
		text-align: left;
		flex-shrink: 0;
		white-space: nowrap;
	}

	.tag-boxes {
		display: flex;
		gap: 2px;
		flex-wrap: wrap;
		align-items: center;
		min-height: 6px;
	}

	.tag-box {
		width: 8px;
		height: 8px;
		border-radius: 1px;
		background: var(--color-border-light);
		transition: all 150ms ease;
		animation: boxAppear 150ms ease-out;
	}

	@keyframes boxAppear {
		from {
			opacity: 0;
			transform: scale(0.5);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.tag-box.filled {
		background: var(--color-text-muted);
	}

	/* Tag-specific box colors */
	.tag-box[data-type="hammerfall"].filled { background: #2d2d2d; }
	.tag-box[data-type="collapse"].filled { background: #4a4a4a; }
	.tag-box[data-type="stress"].filled { background: #a67c52; }
	.tag-box[data-type="expansion"].filled { background: #b8942a; }
	.tag-box[data-type="transition"].filled { background: #6a6a6a; }
	.tag-box[data-type="recovery"].filled { background: #808080; }
	.tag-box[data-type="parallel"].filled { background: #707070; }

	.tag-box[data-type="tech"].filled { background: #4a5a68; }
	.tag-box[data-type="cognitive"].filled { background: #6a5a7a; }
	.tag-box[data-type="climate"].filled { background: #5a6878; }
	.tag-box[data-type="migration"].filled { background: #8a7a60; }
	.tag-box[data-type="external"].filled { background: #3a3235; }

	.tag-box[data-type="gain"].filled { background: #a08820; }
	.tag-box[data-type="lost"].filled { background: #3d3d3d; }

	/* Tag name pill styles (matching content tags) */
	.tag-name[data-type="hammerfall"] { background: #2d2d2d; color: #c08080; }
	.tag-name[data-type="collapse"] { background: #4a4a4a; color: #d0d0d0; }
	.tag-name[data-type="stress"] { background: #f0e2d0; color: #a67c52; }
	.tag-name[data-type="expansion"] { background: #f5ecd4; color: #b8942a; }
	.tag-name[data-type="transition"] { background: #e8e8e8; color: #6a6a6a; }
	.tag-name[data-type="recovery"] { background: #f8f8f8; color: #808080; }
	.tag-name[data-type="parallel"] { background: #e8e8e8; color: #707070; }

	.tag-name[data-type="tech"] { background: #e0e5e8; color: #4a5a68; }
	.tag-name[data-type="cognitive"] { background: #ebe4f0; color: #6a5a7a; }
	.tag-name[data-type="climate"] { background: #e4eaef; color: #5a6878; }
	.tag-name[data-type="migration"] { background: #f2ebe0; color: #8a7a60; }
	.tag-name[data-type="external"] { background: #3a3235; color: #c0a8a8; }

	.tag-name[data-type="gain"] { background: #f5ecc0; color: #a08820; }
	.tag-name[data-type="lost"] { background: #3d3d3d; color: #909090; }
</style>
