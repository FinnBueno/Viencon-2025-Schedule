import styled from "@emotion/styled";
import {
  getAllTimestampSegments,
  isVisibleTimestamp,
} from "../scheduling/time-util";

const DayHeader = styled.h2`
  grid-row: start-timestamp / end-timestamp;
  z-index: 2;
  margin: 0 0 36px 0;
`;

const FridayHeader = styled(DayHeader)`
  grid-column: FRIDAY-16-0-start / FRIDAY-23-0-end;
`;

const SaturdayHeader = styled(DayHeader)`
  grid-column: SATURDAY-11-0-start / SATURDAY-12-0-end;
`;

const SundayHeader = styled(DayHeader)`
  grid-column: SUNDAY-11-0-start / SUNDAY-12-0-end;
`;

const TimestampDisplay = styled.div<{ stamp: string }>`
  grid-column: ${({ stamp }) => `${stamp}-start / ${stamp}-end`};
  grid-row: start-timestamp / end-timestamp;
  font-size: 1.5rem;
  position: relative;
  & > p {
    position: absolute;
    left: calc(-50% + 10px);
    margin: 0;
    bottom: 0;
  }
`;

export const TableHeaders = () => {
  return (
    <>
      <FridayHeader>Friday</FridayHeader>
      <SaturdayHeader>Saturday</SaturdayHeader>
      <SundayHeader>Sunday</SundayHeader>
      {getAllTimestampSegments().map(({ day, hours, quarters }) => {
        const stamp = `${day}-${hours}-${quarters}`;
        return (
          <TimestampDisplay
            key={stamp}
            stamp={stamp}
            style={{
              overflow: isVisibleTimestamp(hours, quarters)
                ? "visible"
                : "hidden",
            }}
          >
            <p>
              {hours}:{quarters || "00"}
            </p>
          </TimestampDisplay>
        );
      })}
    </>
  );
};
