<script>
    import timeline from "../../FunctionalComponents/timeline-store";
    import workingDay from "../../FunctionalComponents/working-day-store";
    import { Button } from "sveltestrap";

    export let day;
    export let action;

    let active = true;
    let buttonClass = "notActiveDay";
    let buttonActive = false;
    let workDays;

    const unsubscribeTimeline = timeline.subscribe((days) => {
        workDays = days;
    });
    const unsubscribeWorkingDay = workingDay.subscribe(() => {});

    $: active = workDays.filter(
        (date) =>
            date[0].month === day.toObject().month &&
            date[0].day === day.toObject().day
    );

    $: if (active.length !== 0) {
        buttonClass = "warning";
        buttonActive = false;
    }
    $: if (active.length === 0) {
        buttonClass = "secondary";
        buttonActive = false;
        if (action === "Selecting Time") {
            buttonActive = true;
            buttonClass = "disable";
        }
    }

    function actionController(event) {
        if (event.target.name === "Selecting Day") {
            action = "Selecting Time";
        } else {
            action = "Selecting Day";
            workingDay.clearWorkingDay();
        }
    }
</script>

<main>
    {#if action === "Selecting Day"}
        <Button
            block
            color={buttonClass}
            disabled={buttonActive}
            variant="outlined"
            on:click={() => timeline.dayPicker(day, workDays)}
            >{day.day}
        </Button>
    {/if}

    {#if action === "Selecting Time"}
        <Button
            block
            color={buttonClass}
            disabled={buttonActive}
            outlined
            on:click={() => workingDay.setNewDay(day, workDays)}
            >{day.day}
        </Button>
    {/if}
</main>

<style>
    main {
        width: 78px;
        float: left;
        text-align: center;
    }
</style>
