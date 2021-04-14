<script>
    import Calendar from "../UIComponents/Calendar/Calendar.svelte";
    let user;
    $: console.log(user);
</script>

<main>
    <button
        on:click={() => {
            user = "taxi";
        }}>taxi</button
    >
    <button
        on:click={() => {
            user = "place";
        }}>place</button
    >

    {#if user === "taxi"}
        <Calendar />
    {/if}
</main>

<style>
</style>
