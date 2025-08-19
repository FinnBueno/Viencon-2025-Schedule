import { ALL_LOCATIONS } from "../data/locations";

export const getAllLocationOptions = () => {
  return ALL_LOCATIONS.reduce<{ id: string; name: string }[]>(
    (total, current) => {
      if (current.subroom) {
        total = [
          ...total,
          ...Object.entries(current.subroom).map(([key, subroom]) => ({
            id: key,
            name: current.name
              ? `<b>${current.name}</b> ${subroom.name}`
              : `<b>${subroom.name}</b>`,
          })),
        ];
      } else {
        total = [
          ...total,
          {
            id: current.id,
            name: `<b>${current.name}</b>`,
          },
        ];
      }
      return total;
    },
    []
  );
  //.map((item) => ({ ...item, name: item.name.replace("\n", "<br />") }));
};
