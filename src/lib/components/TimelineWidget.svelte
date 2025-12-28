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

	// Timeline data points for each era
	const eraData = [
		{ year: '300,000 BCE', population: '10,000', consciousness: 5, whyCapacity: 0, howCapacity: 25, intelligence: { gained: 0, lost: 0 }, keyMetrics: { symbolism: 0, ritual: 5, technology: 15, socialComplexity: 10 } },
		{ year: '42,000 BCE', population: '100,000', consciousness: 45, whyCapacity: 60, howCapacity: 40, intelligence: { gained: 55, lost: 0 }, keyMetrics: { symbolism: 70, ritual: 65, technology: 35, socialComplexity: 30 } },
		{ year: '12,000 BCE', population: '5,000,000', consciousness: 55, whyCapacity: 70, howCapacity: 55, intelligence: { gained: 65, lost: 5 }, keyMetrics: { symbolism: 75, ritual: 80, technology: 50, socialComplexity: 60 } },
		{ year: '6,000 BCE', population: '50,000,000', consciousness: 65, whyCapacity: 75, howCapacity: 70, intelligence: { gained: 70, lost: 10 }, keyMetrics: { symbolism: 80, ritual: 85, technology: 65, socialComplexity: 75 } },
		{ year: '4,000 BCE', population: '100,000,000', consciousness: 70, whyCapacity: 80, howCapacity: 72, intelligence: { gained: 75, lost: 12 }, keyMetrics: { symbolism: 85, ritual: 88, technology: 68, socialComplexity: 80 } },
		{ year: '3,200 BCE', population: '80,000,000', consciousness: 60, whyCapacity: 65, howCapacity: 60, intelligence: { gained: 75, lost: 35 }, keyMetrics: { symbolism: 70, ritual: 60, technology: 55, socialComplexity: 50 } },
		{ year: '2,500 BCE', population: '200,000,000', consciousness: 85, whyCapacity: 90, howCapacity: 75, intelligence: { gained: 90, lost: 15 }, keyMetrics: { symbolism: 95, ritual: 85, technology: 70, socialComplexity: 85 } },
		{ year: '0 CE', population: '300,000,000', consciousness: 80, whyCapacity: 85, howCapacity: 78, intelligence: { gained: 85, lost: 25 }, keyMetrics: { symbolism: 90, ritual: 90, technology: 72, socialComplexity: 88 } },
		{ year: '1,000 CE', population: '400,000,000', consciousness: 75, whyCapacity: 82, howCapacity: 70, intelligence: { gained: 80, lost: 30 }, keyMetrics: { symbolism: 88, ritual: 92, technology: 65, socialComplexity: 85 } },
		{ year: '1,500 CE', population: '1,000,000,000', consciousness: 85, whyCapacity: 75, howCapacity: 95, intelligence: { gained: 95, lost: 20 }, keyMetrics: { symbolism: 85, ritual: 70, technology: 95, socialComplexity: 92 } },
		{ year: '2025 CE', population: '8,000,000,000', consciousness: 70, whyCapacity: 50, howCapacity: 100, intelligence: { gained: 100, lost: 40 }, keyMetrics: { symbolism: 60, ritual: 40, technology: 100, socialComplexity: 95 } }
	];

	let currentData = $derived(eraData[activeEraIndex] || eraData[0]);
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

	// Generate smooth bezier curve path for a metric
	function getSmoothPath(metric: 'consciousness' | 'whyCapacity' | 'howCapacity', maxIndex: number = eraData.length - 1): string {
		const width = 400;
		const height = 100;
		const points: {x: number, y: number}[] = [];

		for (let i = 0; i <= maxIndex; i++) {
			const x = (i / (eraData.length - 1)) * width;
			const y = height - (eraData[i][metric] / 100) * height;
			points.push({x, y});
		}

		if (points.length < 2) return '';

		let path = `M ${points[0].x},${points[0].y}`;

		for (let i = 0; i < points.length - 1; i++) {
			const p0 = points[i === 0 ? i : i - 1];
			const p1 = points[i];
			const p2 = points[i + 1];
			const p3 = points[i + 2 >= points.length ? i + 1 : i + 2];

			const tension = 0.3;
			const cp1x = p1.x + (p2.x - p0.x) * tension;
			const cp1y = p1.y + (p2.y - p0.y) * tension;
			const cp2x = p2.x - (p3.x - p1.x) * tension;
			const cp2y = p2.y - (p3.y - p1.y) * tension;

			path += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
		}

		return path;
	}

	// Get current position marker X
	function getCurrentMarkerX(): number {
		const width = 400;
		return (activeEraIndex / (eraData.length - 1)) * width;
	}

	// Calculate clip path for reveal animation
	let revealClipPath = $derived(`inset(0 ${100 - ((activeEraIndex + 1) / eraData.length) * 100}% 0 0)`);
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
				<span class="stat-value">{currentData.year}</span>
			</div>
			<div class="stat">
				<span class="stat-label">Population</span>
				<span class="stat-value">{currentData.population}</span>
			</div>
		</div>
	</div>

	<!-- Consciousness Graph -->
	<div class="graph-section">
		<div class="graph-header">
			<span class="section-label">Consciousness & Capacity Evolution</span>
			<div class="graph-legend">
				<span class="legend-item"><span class="legend-color consciousness"></span>Consciousness</span>
				<span class="legend-item"><span class="legend-color why"></span>WHY</span>
				<span class="legend-item"><span class="legend-color how"></span>HOW</span>
			</div>
		</div>
		<svg class="graph" viewBox="0 0 400 100" preserveAspectRatio="none">
			<line x1="0" y1="50" x2="400" y2="50" class="grid-line" />
			<path d={getSmoothPath('howCapacity')} class="graph-line how-line dimmed" fill="none" />
			<path d={getSmoothPath('whyCapacity')} class="graph-line why-line dimmed" fill="none" />
			<path d={getSmoothPath('consciousness')} class="graph-line consciousness-line dimmed" fill="none" />
			<g style="clip-path: {revealClipPath}">
				<path d={getSmoothPath('howCapacity')} class="graph-line how-line" fill="none" />
				<path d={getSmoothPath('whyCapacity')} class="graph-line why-line" fill="none" />
				<path d={getSmoothPath('consciousness')} class="graph-line consciousness-line" fill="none" />
			</g>
			<line x1={getCurrentMarkerX()} y1="0" x2={getCurrentMarkerX()} y2="100" class="position-marker" />
			<circle cx={getCurrentMarkerX()} cy={100 - (currentData.consciousness / 100) * 100} r="4" class="position-dot consciousness-dot" />
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
		border-radius: 8px;
		padding: 1.25rem;
		font-family: var(--font-sans);
		width: 100%;
	}

	/* Header */
	.widget-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1.25rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--color-border-light);
	}

	.header-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.header-title {
		font-family: var(--font-serif);
		font-size: 1.35rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0.25rem 0 0 0;
	}

	.header-stats {
		display: flex;
		gap: 1.5rem;
		text-align: right;
	}

	.stat-label {
		display: block;
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.stat-value {
		font-size: 1.1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	/* Graph Section */
	.graph-section {
		margin-bottom: 1.25rem;
	}

	.graph-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.section-label {
		font-size: 0.75rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.graph-legend {
		display: flex;
		gap: 1rem;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.35rem;
		font-size: 0.7rem;
		color: var(--color-text-secondary);
	}

	.legend-color {
		width: 10px;
		height: 10px;
		border-radius: 2px;
	}

	.legend-color.consciousness { background: #2d2d2d; }
	.legend-color.why { background: #d4af37; }
	.legend-color.how { background: #a8a8a8; }

	.graph {
		width: 100%;
		height: 90px;
		background: var(--color-bg-alt);
		border-radius: 6px;
	}

	.grid-line {
		stroke: var(--color-border-light);
		stroke-width: 1;
	}

	.graph-line {
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.graph-line.dimmed {
		opacity: 0.15;
	}

	.consciousness-line { stroke: #2d2d2d; }
	.why-line { stroke: #d4af37; }
	.how-line { stroke: #9ca3af; }

	.position-marker {
		stroke: var(--color-text-muted);
		stroke-width: 1;
		stroke-dasharray: 3,3;
	}

	.position-dot {
		transition: cx 0.3s ease, cy 0.3s ease;
	}

	.consciousness-dot { fill: #2d2d2d; }

	/* Era Selector */
	.era-selector {
		display: flex;
		justify-content: space-between;
		gap: 0.25rem;
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border-light);
	}

	.era-dot {
		width: 28px;
		height: 28px;
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
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--color-text-muted);
	}

	/* ===== TAG CATEGORIES WITH BOXES ===== */
	.tag-categories {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid var(--color-border-light);
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.tag-category {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
	}

	.category-header {
		margin-bottom: 0.25rem;
	}

	.category-label {
		font-size: 0.7rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--color-text-muted);
	}

	.tag-rows {
		display: flex;
		flex-direction: column;
		gap: 0.3rem;
	}

	.tag-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tag-name {
		font-family: var(--font-sans);
		font-size: 0.65rem;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.02em;
		padding: 4px 8px;
		border-radius: 3px;
		background: var(--color-bg-alt);
		color: var(--color-text-secondary);
		width: 90px;
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
		min-height: 10px;
	}

	.tag-box {
		width: 11px;
		height: 11px;
		border-radius: 2px;
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
