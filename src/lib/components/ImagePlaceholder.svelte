<script lang="ts">
	interface Props {
		description: string;
	}

	let { description }: Props = $props();
</script>

<figure class="image-placeholder">
	<div class="placeholder-frame">
		<svg class="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
			<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
			<circle cx="8.5" cy="8.5" r="1.5"></circle>
			<polyline points="21 15 16 10 5 21"></polyline>
		</svg>
	</div>
	<figcaption class="placeholder-caption">{description}</figcaption>
</figure>

<style>
	.image-placeholder {
		margin-bottom: var(--spacing-lg);
	}

	.placeholder-frame {
		aspect-ratio: 16 / 9;
		background: linear-gradient(
			135deg,
			var(--color-bg-tertiary) 0%,
			var(--color-bg-secondary) 100%
		);
		border-radius: 8px;
		border: 1px dashed var(--color-bg-tertiary);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.placeholder-frame::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			linear-gradient(90deg, transparent 50%, rgba(201, 162, 39, 0.03) 50%),
			linear-gradient(transparent 50%, rgba(201, 162, 39, 0.03) 50%);
		background-size: 20px 20px;
	}

	.placeholder-icon {
		width: 48px;
		height: 48px;
		color: var(--color-text-muted);
		opacity: 0.5;
	}

	.placeholder-caption {
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: var(--color-text-muted);
		font-style: italic;
		text-align: center;
		margin-top: var(--spacing-sm);
		padding: 0 var(--spacing-md);
	}
</style>
