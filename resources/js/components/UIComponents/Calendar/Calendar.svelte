<script>
    import { DateTime, Interval, Duration } from "luxon";
    import DayPicker from "./DayPicker.svelte";
    import TimePicker from "./TimePicker.svelte";
    import workingDay from "../../FunctionalComponents/working-day-store";
    import {
        Button,
        ButtonGroup,
        Icon,
        Card,
        CardBody,
        CardFooter,
        CardHeader,
        CardSubtitle,
        CardText,
        CardTitle,
    } from "sveltestrap";
    import { Col, Container, Row } from "sveltestrap";
    import { fly, fade, slide } from "svelte/transition";

    export let action = "Selecting Day";

    let selectedDay;
    let monthModificator = 0;
    let now = DateTime.local().plus({ month: monthModificator });
    let firstDayOfFirstWeek = now.startOf("month").startOf("week");
    let lastDayOfLasttWeek = now.endOf("month").endOf("week");
    let monthToDisplay = Interval.fromDateTimes(
        firstDayOfFirstWeek,
        lastDayOfLasttWeek
    );
    let monthMatrix = [];

    const unsubscribe = workingDay.subscribe((_workingDay) => {
        selectedDay = _workingDay;
    });

    for (let v = 0; v < monthToDisplay.length("day"); v++) {
        monthMatrix = [...monthMatrix, firstDayOfFirstWeek.plus({ day: v })];
    }

    function monthModificatorController(value) {
        monthModificator = monthModificator + value;
        now = DateTime.local().plus({ month: monthModificator });

        firstDayOfFirstWeek = now.startOf("month").startOf("week");
        lastDayOfLasttWeek = now.endOf("month").endOf("week");
        monthToDisplay = Interval.fromDateTimes(
            firstDayOfFirstWeek,
            lastDayOfLasttWeek
        );
        monthMatrix = [];

        for (let v = 0; v < monthToDisplay.length("day"); v++) {
            monthMatrix = [
                ...monthMatrix,
                firstDayOfFirstWeek.plus({ day: v }),
            ];
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
    <Container>
        <Card class="mb-3">
            <CardHeader>
                <Row>
                    <Col>
                        <Button
                            block
                            color="info"
                            on:click={() => monthModificatorController(-1)}
                        >
                            <Icon name="caret-left-fill" />
                            <Icon name="caret-left-fill" />
                            <Icon name="caret-left-fill" />
                            <Icon name="caret-left-fill" />
                        </Button>
                    </Col>
                    <Col>
                        <h3 class="text-light">
                            {now.monthLong.toUpperCase()}
                        </h3>
                    </Col>
                    <Col>
                        <Button
                            block
                            color="info"
                            on:click={() => monthModificatorController(1)}
                        >
                            <Icon name="caret-right-fill" />
                            <Icon name="caret-right-fill" />
                            <Icon name="caret-right-fill" />
                            <Icon name="caret-right-fill" />
                        </Button>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <Row>
                    <div class="text-light weekday">Mon</div>
                    <div class="text-light weekday">Tue</div>
                    <div class="text-light weekday">Wed</div>
                    <div class="text-light weekday">Thu</div>
                    <div class="text-light weekday">Fri</div>
                    <div class="text-light weekday">Sat</div>
                    <div class="text-light weekday">Sun</div>

                    {#each monthMatrix as day, i (day.ts)}
                        <DayPicker {day} {action} />
                    {/each}
                </Row>
            </CardBody>
            <Button
                block
                color={action === "Selecting Time" ? "light" : "dark"}
                on:click={actionController}
                name={action}>{action}</Button
            >
        </Card>

        {#if selectedDay.length !== 0}
            <h2>
                {selectedDay[0].day}
                {selectedDay[0].month}
            </h2>
            <Row cols={4}>
                {#each selectedDay[1] as timeSlot, v ("timeSlot" + v)}
                    <div transition:fade>
                        <TimePicker on:pick-a-time {timeSlot} {v} />
                    </div>
                {/each}
            </Row>
            <Button block on:click={() => workingDay.reverse(selectedDay)}
                >Reverse</Button
            >
        {/if}
    </Container>
</main>

<style>
    main {
        margin: 0 auto;
        width: 590px;
    }

    .weekday {
        width: 78px;
        font-size: 1.2rem;
        float: left;
        text-align: center;
        margin: 5px 0px;
    }

    @media (min-width: 640px) {
        main {
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>
