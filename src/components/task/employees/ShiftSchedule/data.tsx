import { array } from "yup";

interface Records {
  id: number;
  name: string;
  image: string;
  department: string;
  day1: Object[];
  day2: Object[];
  day3: Object[];
  day4: Object[];
  day5: Object[];
  day6: Object[];
  day7: Object[];
  day8: Object[];
  day9: Object[];
}
const records: Records[] = [
  {
    id: 1,
    name: "Jon Doe",
    image: "https://i.ibb.co/grkMRWb/Untitled-design-14.png",
    department: "Web Designer",
    day1: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day2: [],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: [],
    day8: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day9: [],
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "https://i.ibb.co/VqBCp6h/Untitled-design-16.png",
    department: "Android Developer",
    day1: [],
    day2: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day3: [],
    day4: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day5: [],
    day6: [],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 3,
    name: "Alice Johnson",
    image: "https://i.ibb.co/ccVZdHs/istockphoto-464628641-612x612.jpg",
    department: "Team Leader",
    day1: [],
    day2: [],
    day3: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day4: [],
    day5: [],
    day6: [],
    day7: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day8: [],
    day9: [],
  },
  {
    id: 4,
    name: "Mike Williams",
    image: "https://i.ibb.co/df5Mdm8/Untitled-design-15.png",
    department: "Frontend Developer",
    day1: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day2: [],
    day3: [],
    day4: [],
    day5: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day6: [],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 5,
    name: "Emily Brown",
    image: "https://i.ibb.co/N1Q8t0B/Education.png",
    department: "Backend Developer",
    day1: [],
    day2: [],
    day3: [],
    day4: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day5: [],
    day6: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 6,
    name: "Jon Doe",
    image: "https://i.ibb.co/grkMRWb/Untitled-design-14.png",
    department: "Web Designer",
    day1: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day2: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day3: [],
    day4: [],
    day5: [],
    day6: [],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 7,
    name: "Jane Smith",
    image: "https://i.ibb.co/VqBCp6h/Untitled-design-16.png",
    department: "Android Developer",
    day1: [],
    day2: [],
    day3: [],
    day4: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day5: [],
    day6: [],
    day7: [],
    day8: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day9: [],
  },
  {
    id: 8,
    name: "Alice Johnson",
    image: "https://i.ibb.co/ccVZdHs/istockphoto-464628641-612x612.jpg",
    department: "Team Leader",
    day1: [],
    day2: [],
    day3: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day4: [],
    day5: [],
    day6: [],
    day7: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day8: [],
    day9: [],
  },
  {
    id: 9,
    name: "Mike Williams",
    image: "https://i.ibb.co/df5Mdm8/Untitled-design-15.png",
    department: "Frontend Developer",
    day1: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day2: [],
    day3: [],
    day4: [],
    day5: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day6: [],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 10,
    name: "Emily Brown",
    image: "https://i.ibb.co/N1Q8t0B/Education.png",
    department: "Backend Developer",
    day1: [],
    day2: [],
    day3: [],
    day4: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day5: [],
    day6: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 11,
    name: "Alice Johnson",
    image: "https://i.ibb.co/ccVZdHs/istockphoto-464628641-612x612.jpg",
    department: "Team Leader",
    day1: [],
    day2: [],
    day3: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day4: [],
    day5: [],
    day6: [],
    day7: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day8: [],
    day9: [],
  },
  {
    id: 12,
    name: "Mike Williams",
    image: "https://i.ibb.co/df5Mdm8/Untitled-design-15.png",
    department: "Frontend Developer",
    day1: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day2: [],
    day3: [],
    day4: [],
    day5: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day6: [],
    day7: [],
    day8: [],
    day9: [],
  },
  {
    id: 13,
    name: "Emily Brown",
    image: "https://i.ibb.co/N1Q8t0B/Education.png",
    department: "Backend Developer",
    day1: [],
    day2: [],
    day3: [],
    day4: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day5: [],
    day6: [
      {
        scheduleShift:
          "6:30 am - 9:30 pm (14 hrs 15 mins) Web Designer -SMARTHR",
      },
    ],
    day7: [],
    day8: [],
    day9: [],
  },
];

export { records };
