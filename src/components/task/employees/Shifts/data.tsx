interface Records {
  id: number;
  shiftName: string;
  minStartTime: string;
  startTime: string;
  maxStartTime: string;
  minEndTime: string;
  endTime: string;
  maxEndTime: string;
  breakTime: string;
  status: string;
  action: string;
}
const records: Records[] = [
  {
    id: 1,
    shiftName: "Daily Rout",
    minStartTime: "06:00:00 am",
    startTime: "06:30:00 am",
    maxStartTime: "06:00:00 am",
    minEndTime: "03:00:00 pm",
    endTime: "03:30:00 pm",
    maxEndTime: "04:00:00 pm",
    breakTime: "60 mins",
    status: "",
    action: "",
  },
  {
    id: 2,
    shiftName: "10:30 shift",
    minStartTime: "10:00:00 am",
    startTime: "10:30:00 am",
    maxStartTime: "11:00:00 am",
    minEndTime: "06:30:00 pm",
    endTime: "06:30:00 pm",
    maxEndTime: "07:30:00 pm",
    breakTime: "45 mins",
    status: "",
    action: "",
  },
  {
    id: 3,
    shiftName: "10'o clock Shift",
    minStartTime: "09:00:00 am",
    startTime: "10:00:00 am",
    maxStartTime: "10:30:00 am",
    minEndTime: "06:00:00 pm",
    endTime: "07:00:00 pm",
    maxEndTime: "07:00:00 pm",
    breakTime: "30 mins",
    status: "",
    action: "",
  },
];

export { records };
