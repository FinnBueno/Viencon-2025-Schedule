import styled from '@emotion/styled'
import { ALL_LOCATIONS } from './data/locations'
import { css, Global } from '@emotion/react'
import { DAYS } from './data/events'
import type { FC } from 'react'

const globalStyle = css`
* {
  font-family: Arial, Helvetica, sans-serif;
}
`

const amountOfSegments = (8 + 24 + 18) * 4
const segmentSpace = '100px';
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${getColumnTemplate()};
  row-gap: 8px;
`

const TimestampDisplay = styled.div<{ stamp: string }>`
  grid-column-start: ${({ stamp }) => `${stamp}-start / ${stamp}-end`};
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
              <TableRow title={`${loc.name} (${subroom.name})`} />
            )) : (
              <TableRow title={loc.name} />
            )}
          </>
        ))}
      </Grid>
    </>
  )
}

type TableRowProps = {
  title: string;
}

const LocationRow = styled.div`
  background-color: #f0c1c2;
  padding: 12px;
  white-space: nowrap;
  grid-column: start-header / end-header;
`

const TableRow: FC<TableRowProps> = ({ title }) => {
  return (
    <>
      <LocationRow>
        <p>{title}</p>
      </LocationRow>
    </>
  )
}

export default App
