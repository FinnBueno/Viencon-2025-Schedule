import styled from "@emotion/styled";
import type { FC, ReactNode } from "react";
import { Button } from "../atoms/button";
import { IoCloseCircle } from "react-icons/io5";
import { darkTheme } from "../../styles/theme";

const Backdrop = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 10;

  opacity: ${props => props.show ? 1 : 0};
  pointer-events: ${props => props.show ? 'auto' : 'none'};
  transition: opacity 200ms;
`;

const ModalContainer = styled.div`
  background-color: ${props => props.theme.color.background};
  margin: 0 8px;
  box-shadow: -1px -1px 25px 3px rgba(0,0,0,0.75);
  -webkit-box-shadow: -1px -1px 25px 3px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px -1px 25px 3px rgba(0,0,0,0.75);
  position: relative;
  max-width: 400px;
`

const ModalBody = styled.div`
  padding: 12px;
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 4px;
`

export const Modal: FC<{ hideModal: () => void, children: ReactNode, show: boolean }> = ({ show, hideModal, children }) => (
  <Backdrop onClick={hideModal} show={show}>
    <ModalContainer>
      <CloseButton>
        <IoCloseCircle color={darkTheme.color.font.onBackground} size={28} />
      </CloseButton>
      <ModalBody>
        {children}
      </ModalBody>
    </ModalContainer>
  </Backdrop>
)