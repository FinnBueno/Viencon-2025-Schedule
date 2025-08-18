import styled from '@emotion/styled'
import { ALL_LOCATIONS } from './data/locations'
import { css, Global } from '@emotion/react'
import { DAYS, EVENTS } from './data/events'
import type { FC } from 'react'

const globalStyle = css`
html, body {
  margin: 0;
  padding: 0;
}

* {
  font-family: Arial, Helvetica, sans-serif;
}
`

const amountOfSegments = (8 + 24 + 18) * 4 + 1
const segmentSpace = '80px';
const startHours = 16;

const getColumnTemplate = () => {
  let columnTemplate = '[start-header] min-content [end-header ';
  for (let i = 0; i < amountOfSegments; i++) {
    const [day, hours, quarters] = toTimestamp(i);
    const stamp = `${day}-${hours}-${quarters}`;
    const space = ((hours === 4 && quarters === 0) || hours < 4 || hours >= 11) ? segmentSpace : '0px'
    columnTemplate += `${stamp}-start] ${space} [${stamp}-end`;
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
`

const TimestampDisplay = styled.div<{ stamp: string }>`
  grid-column: ${({ stamp }) => `${stamp}-start / ${stamp}-end`};
  grid-row: start-timestamp / end-timestamp;
  font-size: 1.5rem;
  position: relative;
  overflow: visible !important;
  & > p {
    position: absolute;
    left: calc(-50% + 10px);
    margin: 0;
    bottom: 0;
  }
`

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

const GridBorder = styled.div<{ stamp: string, rowId: string }>`
  border-color: black;
  border-style: solid;
  border-width: 0 0 0 1px;
  grid-column: ${props => `${props.stamp}-start / ${props.stamp}-end`};
  grid-row: ${props => `${props.rowId}-start / ${props.rowId}-end`};
`;

const EventBlock = styled.div<{ from: string, to: string, rowId: string }>`
  background-color: rgba(255, 180, 70);
  grid-column: ${props => `${props.from}-start / ${props.to}-start`};
  grid-row: ${props => `${props.rowId}-start / ${props.rowId}-end`};
  outline: 1px solid;
  margin-left: 1px;
  margin-top: 1px;
`;

function App() {
  return (
    <>
      <Global styles={globalStyle} />
      <Grid>
        <FridayHeader>Friday</FridayHeader>
        <SaturdayHeader>Saturday</SaturdayHeader>
        <SundayHeader>Sunday</SundayHeader>
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
              <>
                {Array.from(Array(amountOfSegments).keys()).map(i => {
                  const [day, hour, minutes] = toTimestamp(i)
                  return (
                    <GridBorder stamp={`${day}-${hour}-${minutes}`} rowId={id} />
                  )
                })}
                <TableRow
                  roomId={id}
                  title={loc.name ? `${loc.name} (${subroom.name})` : subroom.name} />
              </>
            )) : (
              <>
                {Array.from(Array(amountOfSegments).keys()).map(i => {
                  const [day, hour, minutes] = toTimestamp(i)
                  return (
                    <GridBorder stamp={`${day}-${hour}-${minutes}`} rowId={loc.id} />
                  )
                })}
                <TableRow roomId={loc.id} title={loc.name} />
              </>
            )}
          </>
        ))}
        {}
        {EVENTS.map(event => {
          return event.periods.map(({ from, to }) => {
            return (
              <EventBlock
                from={`${from.day}-${from.hours}-${from.minutes}`}
                to={`${to.day}-${to.hours}-${to.minutes}`}
                rowId={event.location.id}
              >
                {event.name}
              </EventBlock>
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
