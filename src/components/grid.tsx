import styled from "@emotion/styled";
import { Fragment, type FC, type ReactNode } from "react";
import { ALL_LOCATIONS } from "../data/locations";
import {
  getAllTimestampSegments,
  isVisibleTimestamp,
} from "../scheduling/time-util";
import { getAllLocationOptions } from "../scheduling/location-util";

const segmentSpace = "80px";

const getColumnTemplate = () => {
  let columnTemplate = "[start-header] min-content [end-header ";
  const allSegments = getAllTimestampSegments();
  for (const { day, hours, quarters, index } of allSegments) {
    const stamp = `${day}-${hours}-${quarters}`;
    const space = isVisibleTimestamp(hours, quarters) ? segmentSpace : "0px";
    columnTemplate += `${stamp}-start] ${space} [${stamp}-end`;
    if (index != allSegments.length - 1) {
      columnTemplate += " ";
    }
  }
  return columnTemplate + " end-of-table]";
};

const getRowTemplate = () => {
  let rowTemplate = "[start-timestamp] min-content [end-timestamp ";
  ALL_LOCATIONS.forEach((location, index) => {
    if (location.subroom) {
      const subroomKeys = Object.keys(location.subroom);
      subroomKeys.forEach((key, index) => {
        if (index === 0) {
          rowTemplate += `${location.id}-start `;
        }
        rowTemplate += `${key}-start] min-content [${key}-end`;
        if (index !== subroomKeys.length - 1) {
          rowTemplate += " ";
        } else {
          rowTemplate += ` ${location.id}-end `;
        }
      });
    } else {
      rowTemplate += `${location.id}-start] min-content [${location.id}-end`;
      if (index !== ALL_LOCATIONS.length - 1) {
        rowTemplate += " ";
      }
    }
  });
  return rowTemplate + "]";
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${getColumnTemplate()};
  grid-template-rows: ${getRowTemplate()};
`;

const GridBorder = styled.div<{ stamp: string; rowId: string }>`
  border-color: ${(props) => props.theme.color.font.onBackground};
  border-style: solid;
  border-width: 0 0 0 1px;
  grid-column: ${(props) => `${props.stamp}-start / ${props.stamp}-end`};
  grid-row: ${(props) => `${props.rowId}-start / ${props.rowId}-end`};
`;

const LocationRow = styled.div<{ roomId: string }>`
  background-color: #f0c1c2;
  padding: 12px;
  white-space: nowrap;
  grid-column: start-header / end-header;
  grid-row: ${({ roomId }) => `${roomId}-start / ${roomId}-end`};
  color: ${(props) => props.theme.color.font.onForeground};
`;

export const ScheduleGrid: FC<{ children: ReactNode }> = ({ children }) => (
  <Grid>
    {getAllLocationOptions().map((loc) => (
      <Fragment key={loc.id}>
        {getAllTimestampSegments().map(({ day, hours, quarters }) => {
          const stamp = `${day}-${hours}-${quarters}`;
          return <GridBorder key={stamp} stamp={stamp} rowId={loc.id} />;
        })}
        <LocationRow roomId={loc.id}>
          <p>{loc.name}</p>
        </LocationRow>
      </Fragment>
    ))}
    {children}
  </Grid>
);
