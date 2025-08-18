import styled from '@emotion/styled'
import { ALL_LOCATIONS } from './data/locations'
import { css, Global } from '@emotion/react'
import { DAYS, EVENTS } from './data/events'
import type { FC } from 'react'

const globalStyle = css`
* {
  font-family: Arial, Helvetica, sans-serif;
}
`

const amountOfSegments = (8 + 24 + 18) * 4 + 1
const segmentSpace = '100px';
const startHours = 16;

const getColumnTemplate = () => {
  let columnTemplate = '[start-header] min-content [end-header ';
  for (let i = 0; i < amountOfSegments; i++) {
    const [day, hours, quarters] = toTimestamp(i);
    const stamp = `${day}-${hours}-${quarters}`;
    // const space = ((hours === 4 && quarters === 0) || hours < 4 || hours >= 11) ? segmentSpace : '0px'
    columnTemplate += `${stamp}-start] ${segmentSpace} [${stamp}-end`;
    if (i != amountOfSegments - 1) {
      columnTemplate += ' ';
    }
  }
  return columnTemplate + ' end-of-table]';
}

const toTimestamp = (i: number): [string, number, number] => {
  const quarters = i % 4;
  const hours = (startHours + Math.floor(i / 4)) % 24;
  const day = Math.floor((startHours + Math.floor(i / 4)) / 24)
  return [DAYS[day], hours, quarters * 15];
}

const getRowTemplate = () => {
  let rowTemplate = '[start-timestamp] min-content [end-timestamp ';
  ALL_LOCATIONS.forEach((location, index) => {
    if (location.subroom) {
      const subroomKeys = Object.keys(location.subroom);
      subroomKeys.forEach((key, index) => {
        if (index === 0) {
          rowTemplate += `${location.id}-start `
        }
        rowTemplate += `${key}-start] min-content [${key}-end`;
        if (index !== subroomKeys.length - 1) {
          rowTemplate += ' ';
        } else {
          rowTemplate += ` ${location.id}-end `;
        }
      })
    } else {
      rowTemplate += `${location.id}-start] min-content [${location.id}-end`;
      if (index !== ALL_LOCATIONS.length - 1) {
        rowTemplate += ' ';
      }
    }
  });
  return rowTemplate + ']'
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${getColumnTemplate()};
  grid-template-rows: ${getRowTemplate()};
  row-gap: 8px;
`

const TimestampDisplay = styled.div<{ stamp: string }>`
  grid-column: ${({ stamp }) => `${stamp}-start / ${stamp}-end`};
  grid-row: start-timestamp / end-timestamp;
  background-color: red;
  font-size: 1.5rem;
  position: relative;
  overflow: visible !important;
  & > p {
    position: absolute;
    left: calc(-50% + 21px);
    margin: 0;
    bottom: 0;
  }
`

const FridayHeader = styled.h2`
  grid-column: FRIDAY-16-0-start / FRIDAY-23-0-end;
  grid-row: start-timestamp / end-timestamp;
  z-index: 2;
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Grid>
        <FridayHeader>Friday</FridayHeader>
        {Array.from(Array(amountOfSegments).keys()).map(i => {
          const [day, hour, minutes] = toTimestamp(i)
          return (
            <TimestampDisplay stamp={`${day}-${hour}-${minutes}`} style={{
              overflow: 'hidden'
            }}>
              <p>{hour}:{minutes || '00'}</p>
            </TimestampDisplay>
          )
        })}
        {ALL_LOCATIONS.map((loc) => (
          <>
            {loc.subroom ? Object.entries(loc.subroom).map(([id, subroom]) => (
              <TableRow roomId={id} title={`${loc.name} (${subroom.name})`} />
            )) : (
              <TableRow roomId={loc.id} title={loc.name} />
            )}
          </>
        ))}
        {EVENTS.map(event => {
          return event.periods.map(({ from, to }) => {
            return (
              <div style={{
                backgroundColor: 'rgba(255, 180, 70, 0.5)',
                border: '1px black solid',
                gridRow: `${event.location.id}-start / ${event.location.id}-end`,
                gridColumn: `${from.day}-${from.hours}-${from.minutes}-start / ${to.day}-${to.hours}-${to.minutes}-start`
              }}>
                {event.name}
              </div>
            )
          })
        })}
      </Grid>
    </>
  )
}

type TableRowProps = {
  title: string;
  roomId: string
}

const LocationRow = styled.div<{ roomId: string }>`
  background-color: #f0c1c2;
  padding: 12px;
  white-space: nowrap;
  grid-column: start-header / end-header;
  grid-row: ${({ roomId }) => `${roomId}-start / ${roomId}-end`};
`

const TableRow: FC<TableRowProps> = ({ title, roomId }) => {
  return (
    <>
      <LocationRow roomId={roomId}>
        <p>{title}</p>
      </LocationRow>
    </>
  )
}

export default App
