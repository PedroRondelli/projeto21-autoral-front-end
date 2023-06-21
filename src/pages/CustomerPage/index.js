import styled from "styled-components";
import { Container } from "../../assets/Container";
import { StudioName } from "../../assets/StudioName";

export default function CustomerPage() {
  return (
    <Container>
      <StudioName className="letterPattern">RONDELLI TATTOO</StudioName>
      <WelcomeMessage className="letterPattern" >SEJA BEM VINDO (a)!</WelcomeMessage>
      <input></input>
      <button></button>
    </Container>
  );
}

const WelcomeMessage = styled.p`
  font-size: 4vw;

  -webkit-text-stroke: 0.2vw black;
`;