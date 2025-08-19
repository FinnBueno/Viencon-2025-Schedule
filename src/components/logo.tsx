import styled from "@emotion/styled";
import logo from "../assets/viencon_logo.webp";

const Image = styled.img`
  height: 48px;
  width: auto;
`;

export const LogoImage = () => (
  <Image src={logo} alt='logo'/>
)