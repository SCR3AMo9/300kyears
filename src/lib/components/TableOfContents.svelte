<script lang="ts">
	import { timelineData as eras } from '$lib/data/timeline';
	import type { TimelineEvent } from '$lib/data/types';

	interface Props {
		activeEraIndex: number;
		activeEventId: string;
		onNavigate?: () => void;
	}

	let { activeEraIndex = 0, activeEventId = '', onNavigate }: Props = $props();

	// Check if event contains tech tag (should be excluded from TOC)
	function containsTechTag(event: TimelineEvent): boolean {
		const tags = event.tags ?? (event.type ? [event.type] : []);
		return tags.includes('tech');
	}

	function scrollToItem(id: string) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
		// Call onNavigate callback (for closing mobile menu)
		onNavigate?.();
	}

	function isEraPast(eraIdx: number): boolean {
		return eraIdx < activeEraIndex;
	}

	function isEraActive(eraIdx: number): boolean {
		return eraIdx === activeEraIndex;
	}

	function isEventPast(eraIdx: number, eventIdx: number): boolean {
		if (eraIdx < activeEraIndex) return true;
		if (eraIdx > activeEraIndex) return false;
		const currentEra = eras[activeEraIndex];
		const activeEventIndex = currentEra.events.findIndex(e => e.id === activeEventId);
		return eventIdx < activeEventIndex;
	}

	function isEventActive(eventId: string): boolean {
		return eventId === activeEventId;
	}

	// Format the timespan to show just the starting date
	function formatDate(timespan: string): string {
		const start = timespan.split(' - ')[0].replace('~', '').trim();
		// Format for display
		if (start.includes('years ago')) {
			const num = start.replace(' years ago', '');
			// Convert to shorter format
			if (num.includes(',')) {
				return num.replace(',000', 'k').replace(',', '.');
			}
			return num;
		}
		return start;
	}
</script>

<nav class="toc">
	<div class="toc-line"></div>
	<div class="toc-content">
		{#each eras as era, eraIdx}
			<!-- Era header with date -->
			<button
				class="toc-era"
				class:active={isEraActive(eraIdx)}
				class:past={isEraPast(eraIdx)}
				onclick={() => scrollToItem(era.id)}
			>
				<span class="toc-marker era-marker" class:filled={isEraPast(eraIdx) || isEraActive(eraIdx)}></span>
				<span class="toc-date">{formatDate(era.timespan)}</span>
			</button>

			<!-- Events under this era (excluding events with tech tag) -->
			{#each era.events.filter(e => !containsTechTag(e)) as event, eventIdx}
				<button
					class="toc-event"
					class:active={isEventActive(event.id)}
					class:past={isEventPast(eraIdx, eventIdx)}
					onclick={() => scrollToItem(event.id)}
				>
					<span class="toc-marker event-marker" class:filled={isEventPast(eraIdx, eventIdx)}></span>
					<span class="toc-title">{event.title}</span>
				</button>
			{/each}
		{/each}
	</div>
</nav>

<style>
	.toc {
		position: relative;
	}

	.toc-line {
		position: absolute;
		left: 3px;
		top: 0;
		height: 100%;
		width: 1px;
		background: var(--color-text-primary);
	}

	.toc-content {
		position: relative;
		display: flex;
		flex-direction: column;
		padding-bottom: 2rem;
	}

	/* Base button styles */
	.toc-era,
	.toc-event {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		background: none;
		border: none;
		padding: 0;
		cursor: pointer;
		text-align: left;
	}

	/* Era styles */
	.toc-era {
		margin-top: 1rem;
		margin-bottom: 0.25rem;
	}

	.toc-era:first-child {
		margin-top: 0;
	}

	/* Event styles */
	.toc-event {
		margin-bottom: 0.4rem;
	}

	/* Markers */
	.toc-marker {
		border-radius: 50%;
		background: var(--color-bg);
		flex-shrink: 0;
		position: relative;
		z-index: 1;
		transition: all 150ms ease;
	}

	.era-marker {
		width: 7px;
		height: 7px;
		border: 1.5px solid var(--color-text-primary);
		margin-top: 0.15rem;
	}

	.event-marker {
		width: 5px;
		height: 5px;
		border: 1px solid var(--color-text-muted);
		margin-top: 0.25rem;
		margin-left: 1px;
	}

	.toc-marker.filled {
		background: var(--color-text-primary);
		border-color: var(--color-text-primary);
	}

	.event-marker.filled {
		background: var(--color-text-muted);
		border-color: var(--color-text-muted);
	}

	.toc-event.active .event-marker {
		background: var(--color-text-primary);
		border-color: var(--color-text-primary);
	}

	/* Text styles */
	.toc-date {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		font-weight: 500;
		color: var(--color-text-primary);
		transition: opacity 150ms ease;
	}

	.toc-title {
		font-family: var(--font-sans);
		font-size: 0.7rem;
		font-weight: 400;
		color: var(--color-text-muted);
		line-height: 1.3;
		transition: color 150ms ease;
	}

	.toc-event.active .toc-title {
		color: var(--color-text-primary);
		font-weight: 500;
	}

	.toc-event:hover .toc-title {
		color: var(--color-text-secondary);
	}

	.toc-era:hover .toc-date {
		opacity: 0.7;
	}
</style>
