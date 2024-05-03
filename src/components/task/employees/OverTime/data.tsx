interface Records {
  id: number;
  name: string;
  image: string;
  otDate: string;
  otHours: string;
  otType: string;
  description: string;
  approvedName: string;
  approvedImage: string;
}
interface OverTimeCards {
  id: number;
  name: string;
  number: number;
  pending: number;
  rejects: number;
  month?: string;
}

const records: Records[] = [
  {
    id: 1,
    name: "Jhon Doe",
    image: "https://i.ibb.co/VqBCp6h/Untitled-design-16.png",
    otDate: "2024-05-02T19:32:10.000Z",
    otHours: "4",
    otType: "Normal day OT 1.5x",
    description: "Lorem ipsum dollar",
    approvedName: "Will Sams",
    approvedImage: "https://i.ibb.co/df5Mdm8/Untitled-design-15.png",
  },
  {
    id: 2,
    name: "Alexa",
    image: "https://i.ibb.co/ccVZdHs/istockphoto-464628641-612x612.jpg",
    otDate: "2024-05-02T19:32:10.000Z",
    otHours: "2",
    otType: "Normal day OT 1.5x",
    description: "Lorem ipsum dollar",
    approvedName: "Sam Kuran",
    approvedImage: "https://i.ibb.co/qRX9TQD/image.png",
  },
  {
    id: 3,
    name: "Jhinuk",
    image: "https://i.ibb.co/N1Q8t0B/Education.png",
    otDate: "2024-05-02T19:32:10.000Z",
    otHours: "3",
    otType: "Normal day OT 1.5x",
    description: "Lorem ipsum dollar",
    approvedName: "Virat Kholi",
    approvedImage:
      "https://i.ibb.co/HVh8qSm/1a14794f-4482-46cf-8946-12f443ce408c.jpg",
  },
];

const overtimeCards: OverTimeCards[] = [
  {
    id: 1,
    name: "Overtime Employee",
    number: 12,
    pending: 23,
    rejects: 32,
    month: "this month",
  },
  {
    id: 2,
    name: "Overtime Hours",
    number: 111,
    pending: 23,
    rejects: 32,
    month: "this month",
  },
  {
    id: 3,
    name: "Pending Request",
    number: 24,
    pending: 23,
    rejects: 32,
  },
  {
    id: 4,
    name: "Rejected",
    number: 5,
    pending: 23,
    rejects: 32,
  },
];

export { records, overtimeCards };
