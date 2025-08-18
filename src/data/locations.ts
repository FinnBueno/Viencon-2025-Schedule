export type Location = {
  name: string;
  id: string;
  subroom?: { [key: string]: Location };
};

export const LOCATIONS = {
  Mainstage: {
    id: "Mainstage",
    name: "Mainstage",
    subroom: {
      roomOne: {
        id: "roomOne",
        name: "Room 1",
      },
      roomTwo: {
        id: "roomTwo",
        name: "Room 2",
      },
    },
  },
  DuckyDomeStage: {
    id: "DuckyDomeStage",
    name: "Ducky Dome Stage",
  },
  GameroomKaraoke: {
    id: "GameroomKaraoke",
    name: "",
    subroom: {
      gameroom: {
        id: "gameroom",
        name: "Gameroom",
      },
      karaoke: {
        id: "karaoke",
        name: "Karaoke",
      },
    },
  },
  SharkHouse: {
    id: "Sharkhouse",
    name: "Sharkhouse",
  },
  MainstageField: {
    id: "MainstageField",
    name: "Field next to Mainstage",
  },
  HawkArena: {
    id: "HawkArena",
    name: "Hawk Arena",
    subroom: {
      gym: {
        id: "gym",
        name: "Gym Hall",
      },
      squash: {
        id: "squash",
        name: "Squash Hall",
      },
    },
  },
  Pool: {
    id: "Pool",
    name: "Pool",
  },
};

export const ALL_LOCATIONS: (Location & { id: string })[] = Object.entries(
  LOCATIONS
).map(([key, location]) => ({
  ...location,
  id: key,
}));
