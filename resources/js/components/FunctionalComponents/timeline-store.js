import { writable } from "svelte/store";

function timeline() {
  const workDays = writable([
    [
      {
        year: 2021,
        month: 2,
        day: 1,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },
      [
        {
          hour: 0,
          minute: 0,
          working: false,
        },
        {
          hour: 0,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 0,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 0,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 6,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 6,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 6,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 6,
          minute: 45,
          avaiable: false,
        },
      ],
    ],
    [
      {
        year: 2021,
        month: 2,
        day: 2,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
      },

      [
        {
          hour: 0,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 0,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 0,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 0,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 1,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 2,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 3,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 4,
          minute: 45,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 0,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 15,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 30,
          avaiable: false,
        },
        {
          hour: 5,
          minute: 45,
          avaiable: true,
        },
        {
          hour: 6,
          minute: 0,
          avaiable: true,
        },
        {
          hour: 6,
          minute: 15,
          avaiable: true,
        },
        {
          hour: 6,
          minute: 30,
          avaiable: true,
        },
        {
          hour: 6,
          minute: 45,
          avaiable: false,
        },
      ],
    ],
  ]);
  return {
    subscribe: workDays.subscribe,
    dayPicker: (day, workingDays) => {
      let dayMatrix = [];
      for (let v = 0; v < 24; v = v + 1) {
        for (let i = 0; i < 60; i = i + 15) {
          dayMatrix = [
            ...dayMatrix,
            {
              hour: v,
              minute: i,
              avaiable: false,
            },
          ];
        }
      }

      let newDay = [{ ...day.toObject() }, [...dayMatrix]];
      let data = workingDays.filter(
        (workDay) => JSON.stringify(workDay[0]) === JSON.stringify(newDay[0])
      );
  
      if (data.length === 0) {
        workDays.update(() => {
          return [...workingDays, newDay];
        });
      } else {
        workDays.update(() => {
          return [
            ...workingDays.filter(
              (workDay) =>
                JSON.stringify(workDay[0]) !== JSON.stringify(newDay[0])
            ),
          ];
        });
      }
    },
  };
}
export default timeline();
