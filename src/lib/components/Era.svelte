<script lang="ts">
	import type { Era } from '$lib/data/timeline';
	import Event from './Event.svelte';

	interface Props {
		era: Era;
		isActive?: boolean;
	}

	let { era, isActive = false }: Props = $props();
	let element: HTMLElement;
</script>

<section
	class="era"
	class:active={isActive}
	id={era.id}
	bind:this={element}
>
	<header class="era-header">
		<div class="era-number-wrapper">
			<span class="era-label">ERA</span>
			<div class="era-number">{era.number}</div>
		</div>
		<div class="era-title-block">
			<h2 class="era-title">{era.title}</h2>
			<span class="era-timespan">{era.timespan}</span>
		</div>
	</header>

	<p class="era-description">{era.description}</p>

	<div class="era-events">
		{#each era.events as event (event.id)}
			<Event {event} />
		{/each}
	</div>

	<div class="era-divider"></div>
</section>

<style>
	.era {
		position: relative;
		padding: var(--spacing-2xl) 0;
		opacity: 0.85;
		transition: opacity var(--transition-slow);
	}

	.era.active {
		opacity: 1;
	}

	.era-header {
		display: flex;
		align-items: flex-start;
		gap: var(--spacing-xl);
		margin-bottom: var(--spacing-xl);
		padding-bottom: var(--spacing-lg);
		border-bottom: 2px solid var(--color-bg-tertiary);
	}

	.era-number-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-width: 100px;
	}

	.era-label {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.3em;
		color: var(--color-accent-gold);
		text-transform: uppercase;
		margin-bottom: var(--spacing-xs);
	}

	.era-number {
		font-family: var(--font-serif);
		font-size: clamp(4rem, 10vw, 6rem);
		font-weight: 700;
		color: var(--color-accent-gold);
		line-height: 0.9;
		opacity: 0.8;
	}

	.era-title-block {
		flex: 1;
		padding-top: var(--spacing-sm);
	}

	.era-title {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 700;
		color: var(--color-text-primary);
		margin-bottom: var(--spacing-sm);
		letter-spacing: 0.03em;
		text-transform: uppercase;
		line-height: 1.1;
	}

	.era-timespan {
		font-family: var(--font-serif);
		font-size: 1.2rem;
		color: var(--color-text-muted);
		font-style: italic;
	}

	.era-description {
		font-family: var(--font-serif);
		font-size: 1.4rem;
		font-style: italic;
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-2xl);
		line-height: 1.8;
		max-width: 900px;
		border-left: 3px solid var(--color-accent-gold-dim);
		padding-left: var(--spacing-lg);
		margin-left: var(--spacing-md);
	}

	.era-events {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.era-divider {
		height: 3px;
		background: linear-gradient(
			to right,
			var(--color-accent-gold),
			var(--color-accent-gold-dim),
			transparent
		);
		margin-top: var(--spacing-2xl);
		border-radius: 2px;
	}

	@media (max-width: 768px) {
		.era-header {
			flex-direction: column;
			gap: var(--spacing-md);
		}

		.era-number-wrapper {
			flex-direction: row;
			gap: var(--spacing-sm);
			align-items: baseline;
		}

		.era-number {
			font-size: 3rem;
		}

		.era-description {
			font-size: 1.15rem;
			margin-left: 0;
		}
	}
</style>
