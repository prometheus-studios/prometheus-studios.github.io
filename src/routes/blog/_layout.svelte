<script>
    export let title;
</script>

<svelte:head>
    <title>{title} | Prometheus</title>
</svelte:head>

<div>
    <slot />
</div>