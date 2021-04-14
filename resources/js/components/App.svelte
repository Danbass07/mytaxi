<script>
    import AppMainData from "./FunctionalComponents/AppMainData.svelte";
</script>

<main>
    <AppMainData />
</main>

<style>
    :global(html) {
        background-color: var(--theme-colors-background, initial);
        color: var(--theme-colors-text, initial);
    }
    main {
        color: var(--theme-colors-text, initial);
        background-color: var(--theme-colors-background, initial);
        text-align: center;
        padding: 1em;
        margin: 0 auto;
    }
</style>
