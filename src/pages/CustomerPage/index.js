import styled from "styled-components";
import { Container } from "../../assets/Container";
import { StudioName } from "../../assets/StudioName";
import { ReadyButton } from "../../assets/ReadyButton";
import { AuthForm } from "../../assets/AuthForm";

export default function CustomerPage() {
  return (
    <Container>
      <StudioName className="letterPattern">RONDELLI TATTOO</StudioName>
      <WelcomeMessage className="letterPattern">
        SEJA BEM VINDO (a)!
      </WelcomeMessage>
      <AuthForm>
        <input placeholder="SEU NOME"></input>
        <ReadyButton>PRONTO</ReadyButton>
      </AuthForm>
    </Container>
  );
}

const WelcomeMessage = styled.p`
  font-size: 4vw;

  -webkit-text-stroke: 0.2vw black;
`;
