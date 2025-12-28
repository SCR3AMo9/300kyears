<script lang="ts">
	let scrollY = $state(0);

	function handleScroll() {
		scrollY = window.scrollY;
	}
</script>

<svelte:window on:scroll={handleScroll} />

<header class="hero" style="--scroll-y: {scrollY}px">
	<div class="hero-bg">
		<div class="stars"></div>
		<div class="aurora"></div>
	</div>

	<div class="hero-content">
		<p class="hero-tagline">An Interactive Journey Through</p>
		<h1 class="hero-title">
			<span class="title-line">The Full Timeline</span>
			<span class="title-separator"></span>
			<span class="title-subtitle">Expansions and Collapses of Meaning</span>
		</h1>
		<p class="hero-description">
			300,000 years of human consciousness, meaning-making, and the eternal dance
			between WHAT we experience, WHY it matters, and HOW we respond.
		</p>
		<div class="hero-scroll-indicator">
			<span>Scroll to begin</span>
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<polyline points="7 13 12 18 17 13"></polyline>
				<polyline points="7 6 12 11 17 6"></polyline>
			</svg>
		</div>
	</div>
</header>

<style>
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		z-index: 0;
	}

	.stars {
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.3), transparent),
			radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.2), transparent),
			radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.4), transparent),
			radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.2), transparent),
			radial-gradient(1px 1px at 160px 120px, rgba(255, 255, 255, 0.3), transparent);
		background-size: 200px 200px;
		animation: twinkle 8s ease-in-out infinite;
		transform: translateY(calc(var(--scroll-y) * 0.3));
	}

	@keyframes twinkle {
		0%, 100% { opacity: 1; }
		50% { opacity: 0.5; }
	}

	.aurora {
		position: absolute;
		inset: 0;
		background: radial-gradient(
			ellipse 80% 50% at 50% 120%,
			rgba(139, 58, 58, 0.15) 0%,
			rgba(201, 162, 39, 0.05) 40%,
			transparent 70%
		);
		animation: aurora 15s ease-in-out infinite alternate;
		transform: translateY(calc(var(--scroll-y) * 0.1));
	}

	@keyframes aurora {
		0% {
			opacity: 0.5;
			transform: translateY(calc(var(--scroll-y) * 0.1)) scale(1);
		}
		100% {
			opacity: 1;
			transform: translateY(calc(var(--scroll-y) * 0.1)) scale(1.1);
		}
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: var(--spacing-xl);
		max-width: 900px;
		transform: translateY(calc(var(--scroll-y) * -0.2));
		opacity: calc(1 - var(--scroll-y) / 500);
	}

	.hero-tagline {
		font-family: var(--font-sans);
		font-size: 0.875rem;
		font-weight: 500;
		letter-spacing: 0.3em;
		text-transform: uppercase;
		color: var(--color-accent-gold);
		margin-bottom: var(--spacing-lg);
	}

	.hero-title {
		margin-bottom: var(--spacing-xl);
	}

	.title-line {
		display: block;
		font-family: var(--font-serif);
		font-size: clamp(2.5rem, 8vw, 5rem);
		font-weight: 700;
		color: var(--color-text-primary);
		line-height: 1.1;
	}

	.title-separator {
		display: block;
		width: 100px;
		height: 2px;
		background: linear-gradient(
			to right,
			transparent,
			var(--color-accent-gold),
			transparent
		);
		margin: var(--spacing-lg) auto;
	}

	.title-subtitle {
		display: block;
		font-family: var(--font-serif);
		font-size: clamp(1.25rem, 3vw, 1.75rem);
		font-weight: 400;
		font-style: italic;
		color: var(--color-text-secondary);
	}

	.hero-description {
		font-family: var(--font-sans);
		font-size: 1.125rem;
		line-height: 1.8;
		color: var(--color-text-secondary);
		max-width: 600px;
		margin: 0 auto var(--spacing-2xl);
	}

	.hero-scroll-indicator {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-sm);
		color: var(--color-text-muted);
		font-size: 0.75rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		animation: bounce 2s ease-in-out infinite;
	}

	.hero-scroll-indicator svg {
		width: 24px;
		height: 24px;
	}

	@keyframes bounce {
		0%, 100% { transform: translateY(0); }
		50% { transform: translateY(10px); }
	}
</style>
