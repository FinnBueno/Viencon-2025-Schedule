import type { Location } from "../locations";

export const friday = (hours: number, minutes: number = 0): Timestamp => ({
  day: "FRIDAY",
  hours,
  minutes,
});

export const saturday = (hours: number, minutes: number = 0): Timestamp => ({
  day: "SATURDAY",
  hours,
  minutes,
});

export const sunday = (hours: number, minutes: number = 0): Timestamp => ({
  day: "SUNDAY",
  hours,
  minutes,
});

type Days = "FRIDAY" | "SATURDAY" | "SUNDAY";

export const DAYS: Days[] = ["FRIDAY", "SATURDAY", "SUNDAY"];

export type Timestamp = {
  day: Days;
  hours: number;
  minutes: number;
};

type Timespan = {
  from: Timestamp;
  to: Timestamp;
};

export type Event = {
  name: string;
  subtext?: string;
  link?: string;
  location: Location;
  periods: Timespan[];
};
