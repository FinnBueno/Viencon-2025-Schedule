import type { FC } from "react";
import type { Location } from "../data/locations";
import styled from "@emotion/styled";

const LargeLocationRow = styled.div<{ roomId: string, hide: boolean }>`
  grid-column: start-header / end-header;
  grid-row: ${({ roomId }) => `${roomId}-start / ${roomId}-end`};
  
  padding: 0px 20px 0px 12px;
  margin-right: 32px;

  position: sticky;
  left: 0;
  align-self: start;

  background-color: rgb(234, 174, 93);
  border-radius: 0 12px 12px 0;
  box-shadow: 10px 1px 19px 0px rgba(0,0,0,0.39);
  -webkit-box-shadow: 10px 1px 19px 0px rgba(0,0,0,0.39);
  -moz-box-shadow: 10px 1px 19px 0px rgba(0,0,0,0.39);

  color: ${(props) => props.theme.color.font.onForeground};
  text-align: right;

  transition: opacity 200ms;
  opacity: ${props => props.hide ? 0 : 1};
`;

const SmallLocationRow = styled(LargeLocationRow)`
  width: fit-content;
  display: flex;
  align-items: center;
  height: 100%;
`;

const LocationRowContent = styled.p`
  padding: 4px 0;
`

const SHRINK_THRESHOLD = 140;

export const LocationRow: FC<{ scrollPosition: number, loc: Location }> = ({ scrollPosition, loc }) => (
  <>
    <LargeLocationRow roomId={loc.id} hide={scrollPosition > SHRINK_THRESHOLD}>
      <LocationRowContent dangerouslySetInnerHTML={{
        __html: loc.name
      }} />
    </LargeLocationRow>
    <SmallLocationRow roomId={loc.id} hide={scrollPosition <= SHRINK_THRESHOLD}>
      <LocationRowContent>{loc.emoji}</LocationRowContent>
    </SmallLocationRow>
  </>
)