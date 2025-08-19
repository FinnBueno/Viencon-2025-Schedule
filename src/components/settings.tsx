import styled from "@emotion/styled"
import { Button } from "./atoms/button"
import { theme } from "../styles/theme"
import { FaInfoCircle, FaSun } from "react-icons/fa"
import { useState } from "react"
import { Modal } from "./molecules/modal"

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`

export const Settings = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ButtonGroup>
        <Button>
          <FaSun color={theme.color.font.onBackground} size={24} />
        </Button>
        <Button>
          <FaInfoCircle color={theme.color.font.onBackground} size={24} onClick={() => setShowModal(true)} />
        </Button>
      </ButtonGroup>
      <Modal hideModal={() => setShowModal(false)} show={showModal}>
        <h2>Thanks for using this schedule!</h2>
        <p>This schedule is not an official one and is in no way, shape or form affiliated with the Viencon organisation.</p>
        <p>It is maintained as a small fan project in an attempt to make it easier to plan your weekend. It's updated by hand and may not be 100% accurate. The last update was on <b>August 19th.</b></p>
        <p>If you've found a mistake and want to let me know, you can message me on <a href="https://www.instagram.com/herecomeacosplayer/">Instagram</a>.</p>
      </Modal>
    </>
  )
}