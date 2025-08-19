import type { FC } from "react";
import { EVENTS } from "../data/events";
import styled from "@emotion/styled";

const EventBlock = styled.div<{ from: string; to: string; rowId: string }>`
  background-color: ${(props) => props.theme.color.eventBlock};
  grid-column: ${(props) => `${props.from}-start / ${props.to}-start`};
  grid-row: ${(props) => `${props.rowId}-start / ${props.rowId}-end`};
  outline: 1px solid;
  margin-left: 1px;
  margin-top: 1px;
  color: ${(props) => props.theme.color.font.onForeground};
`;

export const Events: FC<unknown> = () => (
  <>
    {EVENTS.map((event) => {
      return event.periods.map(({ from, to }) => {
        const fromStamp = `${from.day}-${from.hours}-${from.minutes}`;
        const toStamp = `${to.day}-${to.hours}-${to.minutes}`;
        return (
          <EventBlock
            key={event.name + fromStamp + toStamp}
            from={fromStamp}
            to={toStamp}
            rowId={event.location.id}
          >
            {event.subtext ? `${event.name} (${event.subtext})` : event.name}
          </EventBlock>
        );
      });
    })}
  </>
);
