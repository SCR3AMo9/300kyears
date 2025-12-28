<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>The Full Timeline: Expansions and Collapses of Meaning</title>
	<meta name="description" content="An interactive journey through 300,000 years of human meaning-making" />
</svelte:head>

{@render children()}
