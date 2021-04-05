import { writable } from "svelte/store";

function workingDay() {
    const selectedDay = writable([
        // {
        //   year: 2021,
        //   month: 2,
        //   day: 1,
        //   hour: 0,
        //   minute: 0,
        //   second: 0,
        //   millisecond: 0,
        // },
        // [
        //   {
        //     hour: 0,
        //     minute: 0,
        //     avaiable: true,
        //   },
        //   {
        //     hour: 0,
        //     minute: 15,
        //     avaiable: true,
        //   },
        //   {
        //     hour: 0,
        //     minute: 30,
        //     avaiable: true,
        //   },
        //   {
        //     hour: 0,
        //     minute: 45,
        //     avaiable: true,
        //   },
        //   {
        //     hour: 1,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 1,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 1,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 1,
        //     minute: 45,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 2,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 2,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 2,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 2,
        //     minute: 45,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 3,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 3,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 3,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 3,
        //     minute: 45,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 4,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 4,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 4,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 4,
        //     minute: 45,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 5,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 5,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 5,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 5,
        //     minute: 45,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 6,
        //     minute: 0,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 6,
        //     minute: 15,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 6,
        //     minute: 30,
        //     avaiable: false,
        //   },
        //   {
        //     hour: 6,
        //     minute: 45,
        //     avaiable: false,
        //   },
        // ],
    ]);
    return {
        subscribe: selectedDay.subscribe,
        setNewDay: (day, workDays) => {
            let data = workDays.filter(
                (workDay) =>
                    JSON.stringify(workDay[0]) ===
                    JSON.stringify(day.toObject())
            );
            selectedDay.set(data[0]);
        },
        changeTime: (v, day) => {
            day[1].map((timeSlot, index) => {
                if (index === v) {
                    timeSlot.avaiable = !timeSlot.avaiable;
                }
            });

            selectedDay.update(() => {
                return [...day];
            });
        },
        clearWorkingDay: () => {
            selectedDay.set([]);
        },
        reverse: (day) => {
            day[1].map((timeSlot) => {
                timeSlot.avaiable = !timeSlot.avaiable;
            });

            selectedDay.update(() => {
                return [...day];
            });
        },
    };
}
export default workingDay();
