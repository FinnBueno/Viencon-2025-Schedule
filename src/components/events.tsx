import type { FC } from "react";
import { EVENTS } from "../data/events";
import styled from "@emotion/styled";

const EventBlock = styled.div<{ from: string; to: string; rowId: string }>`
  grid-column: ${(props) => `${props.from}-start / ${props.to}-start`};
  grid-row: ${(props) => `${props.rowId}-start / ${props.rowId}-end`};
  
  outline: 1px solid black;
  margin-left: 1px;
  background-color: ${(props) => props.theme.color.eventBlock};
  border-radius: 8px;

  padding: 8px 12px;

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
            {event.subtext ? 
              <>
                <b>{event.name}</b> ({event.subtext})
              </> :
              <b>
                {event.name}
              </b>}
          </EventBlock>
        );
      });
    })}
  </>
);
