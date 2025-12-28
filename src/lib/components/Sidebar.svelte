<script lang="ts">
	import { timelineData as eras } from '$lib/data/timeline';

	interface Props {
		activeEraId: string;
		isOpen?: boolean;
	}

	let { activeEraId, isOpen = true }: Props = $props();

	function scrollToEra(eraId: string) {
		const element = document.getElementById(eraId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	}
</script>

<nav class="sidebar" class:open={isOpen}>
	<div class="sidebar-header">
		<h2 class="sidebar-title">Timeline</h2>
		<span class="sidebar-subtitle">Navigate Eras</span>
	</div>

	<div class="timeline-track">
		{#each eras as era (era.id)}
			<button
				class="era-link"
				class:active={activeEraId === era.id}
				onclick={() => scrollToEra(era.id)}
			>
				<span class="era-link-number">{era.number}</span>
				<span class="era-link-title">{era.title}</span>
				<span class="era-link-time">{era.timespan}</span>
			</button>
		{/each}
	</div>

	<div class="sidebar-footer">
		<div class="legend">
			<h3 class="legend-title">Event Types</h3>
			<div class="legend-items">
				<div class="legend-item">
					<span class="legend-dot expansion"></span>
					<span>Expansion</span>
				</div>
				<div class="legend-item">
					<span class="legend-dot collapse"></span>
					<span>Collapse</span>
				</div>
				<div class="legend-item">
					<span class="legend-dot hammerfall"></span>
					<span>Hammerfall</span>
				</div>
				<div class="legend-item">
					<span class="legend-dot stress"></span>
					<span>Stress</span>
				</div>
				<div class="legend-item">
					<span class="legend-dot transition"></span>
					<span>Transition</span>
				</div>
			</div>
		</div>
	</div>
</nav>

<style>
	.sidebar {
		position: fixed;
		top: 0;
		left: 0;
		width: var(--sidebar-width);
		height: 100vh;
		background: var(--color-bg-primary);
		border-right: 1px solid var(--color-bg-tertiary);
		display: flex;
		flex-direction: column;
		z-index: 100;
		transform: translateX(0);
		transition: transform var(--transition-normal);
	}

	.sidebar:not(.open) {
		transform: translateX(-100%);
	}

	.sidebar-header {
		padding: var(--spacing-lg);
		border-bottom: 1px solid var(--color-bg-tertiary);
	}

	.sidebar-title {
		font-family: var(--font-serif);
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--color-accent-gold);
		margin-bottom: var(--spacing-xs);
	}

	.sidebar-subtitle {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.timeline-track {
		flex: 1;
		overflow-y: auto;
		padding: var(--spacing-md) 0;
	}

	.era-link {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: var(--spacing-md) var(--spacing-lg);
		background: none;
		border: none;
		border-left: 3px solid transparent;
		cursor: pointer;
		text-align: left;
		transition: all var(--transition-fast);
	}

	.era-link:hover {
		background: var(--color-bg-secondary);
		border-left-color: var(--color-accent-gold-dim);
	}

	.era-link.active {
		background: var(--color-bg-secondary);
		border-left-color: var(--color-accent-gold);
	}

	.era-link-number {
		font-family: var(--font-serif);
		font-size: 0.875rem;
		color: var(--color-accent-gold);
		opacity: 0.6;
		margin-bottom: 2px;
	}

	.era-link.active .era-link-number {
		opacity: 1;
	}

	.era-link-title {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 2px;
		line-height: 1.3;
	}

	.era-link-time {
		font-family: var(--font-sans);
		font-size: 0.65rem;
		color: var(--color-text-muted);
	}

	.sidebar-footer {
		padding: var(--spacing-lg);
		border-top: 1px solid var(--color-bg-tertiary);
	}

	.legend-title {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 600;
		color: var(--color-text-muted);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: var(--spacing-sm);
	}

	.legend-items {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.legend-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
	}

	.legend-dot.expansion { background: var(--color-expansion); }
	.legend-dot.collapse { background: var(--color-collapse); }
	.legend-dot.hammerfall { background: var(--color-hammerfall); }
	.legend-dot.stress { background: var(--color-stress); }
	.legend-dot.transition { background: var(--color-transition); }

	@media (max-width: 1024px) {
		.sidebar {
			width: 260px;
		}
	}

	@media (max-width: 768px) {
		.sidebar {
			width: 100%;
			max-width: 300px;
		}
	}
</style>
