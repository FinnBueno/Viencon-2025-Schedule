import { LOCATIONS } from "./locations.ts";
import type { Location } from "./locations.ts";

type Days = "FRIDAY" | "SATURDAY" | "SUNDAY";

export const DAYS: Days[] = ["FRIDAY", "SATURDAY", "SUNDAY"];

type Timestamp = {
  day: Days;
  hours: number;
  minutes: number;
};

type Timespan = {
  from: Timestamp;
  to: Timestamp;
};

type Event = {
  name: string;
  subtext?: string;
  link?: string;
  location: Location;
  periods: Timespan[];
};

const friday = (hours: number, minutes: number): Timestamp => ({
  day: "FRIDAY",
  hours,
  minutes,
});
const saturday = (hours: number, minutes: number): Timestamp => ({
  day: "SATURDAY",
  hours,
  minutes,
});
const sunday = (hours: number, minutes: number): Timestamp => ({
  day: "SUNDAY",
  hours,
  minutes,
});

const FRIDAY_EVENTS: Event[] = [
  {
    name: "D&D Oneshot",
    subtext: "(2 sessions)",
    location: LOCATIONS.Mainstage,
    periods: [
      {
        from: friday(17, 0),
        to: friday(18, 45),
      },
    ],
  },
  {
    name: "Opening Ceremony",
    location: LOCATIONS.Mainstage,
    periods: [
      {
        from: friday(19, 0),
        to: friday(20, 0),
      },
    ],
  },
  {
    name: "Unmei Idols",
    location: LOCATIONS.Mainstage.subroom.roomOne,
    periods: [
      {
        from: friday(20, 15),
        to: friday(21, 15),
      },
    ],
  },
  {
    name: "Festival Lantern Workshop",
    location: LOCATIONS.Mainstage.subroom.roomOne,
    periods: [
      {
        from: friday(21, 30),
        to: friday(22, 45),
      },
    ],
  },
  {
    name: "Happi Chords",
    location: LOCATIONS.Mainstage.subroom.roomOne,
    periods: [
      {
        from: friday(23, 0),
        to: friday(23, 45),
      },
    ],
  },
  {
    name: "Deshima Sounds",
    location: LOCATIONS.Mainstage.subroom.roomOne,
    periods: [
      {
        from: saturday(0, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Bounty Hunter",
    subtext: "(Handout items)",
    location: LOCATIONS.DuckyDomeStage,
    periods: [
      {
        from: friday(18, 0),
        to: friday(18, 55),
      },
    ],
  },
  {
    name: "Pon de Beats",
    location: LOCATIONS.DuckyDomeStage,
    periods: [
      {
        from: friday(23, 0),
        to: friday(23, 45),
      },
    ],
  },
  {
    name: "Nerdcore",
    location: LOCATIONS.Gameroom,
    periods: [
      {
        from: friday(16, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Asgard Sings",
    location: LOCATIONS.Gameroom,
    periods: [
      {
        from: friday(16, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Pong Competition",
    location: LOCATIONS.Gameroom,
    periods: [
      {
        from: friday(20, 30),
        to: friday(22, 30),
      },
    ],
  },
];

export const EVENTS = [...FRIDAY_EVENTS];
