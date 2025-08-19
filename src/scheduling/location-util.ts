import { ALL_LOCATIONS } from "../data/locations";

export const getAllLocationOptions = () => {
  return ALL_LOCATIONS.reduce<{ id: string; name: string }[]>(
    (total, current) => {
      if (current.subroom) {
        total = [
          ...total,
          ...Object.entries(current.subroom).map(([key, value]) => ({
            id: key,
            name: `${current.name} (${value.name})`,
          })),
        ];
      } else {
        total = [
          ...total,
          {
            id: current.id,
            name: current.name,
          },
        ];
      }
      return total;
    },
    []
  );
};
