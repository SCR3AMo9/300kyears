<script lang="ts">
  import "../app.css";

  let { children } = $props();
</script>

<svelte:head>
  <title>The Full Timeline: Expansions and Collapses of Meaning</title>
  <meta
    name="description"
    content="An interactive journey through 300,000 years of human meaning-making"
  />
</svelte:head>

{@render children()}
