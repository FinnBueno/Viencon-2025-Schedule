export type Location = {
  name: string;
  subroom?: { [key: string]: Location };
};

export const LOCATIONS = {
  Mainstage: {
    name: "Mainstage",
    subroom: {
      roomOne: {
        name: "Room 1",
      },
      roomTwo: {
        name: "Room 2",
      },
    },
  },
  DuckyDomeStage: {
    name: "Ducky Dome Stage",
  },
  Gameroom: {
    name: "Gameroom/Karaoke",
  },
  SharkHouse: {
    name: "Sharkhouse",
  },
  MainstageField: {
    name: "Field next to Mainstage",
  },
  HawkArena: {
    name: "Hawk Arena",
    subroom: {
      gym: {
        name: "Gym Hall",
      },
      squash: {
        name: "Squash Hall",
      },
    },
  },
  Pool: {
    name: "Pool",
  },
};

export const ALL_LOCATIONS: (Location & { id: string })[] = Object.entries(
  LOCATIONS
).map(([key, location]) => ({
  ...location,
  id: key,
}));
