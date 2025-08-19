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
        name: "\n(Room 1)",
      },
      roomTwo: {
        id: "roomTwo",
        name: "\n(Room 2)",
      },
    },
  },
  DuckyDomeStage: {
    id: "DuckyDomeStage",
    name: "Ducky Dome\nStage",
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
    id: "SharkHouse",
    name: "Sharkhouse",
  },
  MainstageField: {
    id: "MainstageField",
    name: "Field next to\nMainstage",
  },
  HawkArena: {
    id: "HawkArena",
    name: "Hawk Arena",
    subroom: {
      gym: {
        id: "gym",
        name: "\n(Gym Hall)",
      },
      squash: {
        id: "squash",
        name: "\n(Squash Hall)",
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
