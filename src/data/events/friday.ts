import { friday, saturday, type Event } from "./timestamps";
import { LOCATIONS } from "../locations";

export const FRIDAY_EVENTS: Event[] = [
  {
    name: "D&D Oneshot",
    subtext: "2 sessions",
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
    subtext: "Handout items",
    location: LOCATIONS.DuckyDomeStage,
    periods: [
      {
        from: friday(18, 0),
        to: friday(18, 45),
      },
    ],
  },
  {
    name: "Pon de Beats",
    location: LOCATIONS.DuckyDomeStage,
    periods: [
      {
        from: saturday(0, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Nerdcore",
    location: LOCATIONS.GameroomKaraoke.subroom.gameroom,
    periods: [
      {
        from: friday(16, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Asgard Sings",
    location: LOCATIONS.GameroomKaraoke.subroom.karaoke,
    periods: [
      {
        from: friday(16, 0),
        to: saturday(3, 0),
      },
    ],
  },
  {
    name: "Pong Competition",
    location: LOCATIONS.GameroomKaraoke,
    periods: [
      {
        from: friday(20, 30),
        to: friday(22, 30),
      },
    ],
  },
  // all day events
  {
    name: "Matsuri / Ducky Yard Sale",
    subtext: "Pickup/Drop off only",
    location: LOCATIONS.SharkHouse,
    periods: [
      {
        from: friday(16),
        to: friday(19),
      },
    ],
  },
  {
    name: "Pool open",
    location: LOCATIONS.Pool,
    periods: [
      {
        from: friday(16),
        to: friday(23),
      },
    ],
  },
];
