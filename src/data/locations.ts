export type Location = {
  name: string;
  id: string;
  emoji: string;
  subroom?: { [key: string]: Location };
};

export const LOCATIONS = {
  Mainstage: {
    id: "Mainstage",
    name: "Mainstage",
    emoji: "🎤",
    subroom: {
      roomOne: {
        id: "roomOne",
        emoji: "1️⃣",
        name: "(Room 1)",
      },
      roomTwo: {
        id: "roomTwo",
        emoji: "2️⃣",
        name: "(Room 2)",
      },
    },
  },
  DuckyDomeStage: {
    id: "DuckyDomeStage",
    emoji: "🦆 🎤",
    name: "Ducky Dome Stage",
  },
  GameroomKaraoke: {
    id: "GameroomKaraoke",
    name: "",
    emoji: "",
    subroom: {
      gameroom: {
        id: "gameroom",
        emoji: "🕹️ 🎮",
        name: "Gameroom",
      },
      karaoke: {
        id: "karaoke",
        emoji: "🎙️ 🎶",
        name: "Karaoke",
      },
    },
  },
  SharkHouse: {
    id: "SharkHouse",
    name: "Sharkhouse",
    emoji: "🦈 🏠",
  },
  MainstageField: {
    id: "MainstageField",
    name: "Field next to Mainstage",
    emoji: "🎤 🌳",
  },
  HawkArena: {
    id: "HawkArena",
    name: "Hawk Arena",
    emoji: "🦅",
    subroom: {
      gym: {
        id: "gym",
        name: "(Gym Hall)",
        emoji: "🏋🏻‍♀️",
      },
      squash: {
        id: "squash",
        name: "(Squash Hall)",
        emoji: "🎾",
      },
    },
  },
  Pool: {
    id: "Pool",
    name: "Pool",
    emoji: "🏊🏻‍♀️ 🌊",
  },
};

export const ALL_LOCATIONS: (Location & { id: string })[] = Object.entries(
  LOCATIONS
).map(([key, location]) => ({
  ...location,
  id: key,
}));
