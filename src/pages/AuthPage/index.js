import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import styled from "styled-components";
import backGroundImage from "../../assets/images/backGroundImage.jpg";

export default function AuthPage() {
  const [registering, setregistering] = useState(false);
  return (
    <Container>
      <StudioName className="letterPattern">RONDELLI TATTOO</StudioName>
      {registering ? (
        <RegistrationForm setregistering={setregistering} />
      ) : (
        <LoginForm />
      )}
      {!registering && (
        <RegistrationLink onClick={()=>setregistering(true)} className="letterPattern">
          É NOVO POR AQUI ? CADASTRE-SE !
        </RegistrationLink>
      )}
    </Container>
  );
}

const Container = styled.div`
  background-image: url(${backGroundImage});
  background-size: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StudioName = styled.span`
  font-size: 10vw;

  -webkit-text-stroke: 0.5vw black;
`;
const RegistrationLink = styled.a`
  font-size: 2vw;

  -webkit-text-stroke: 0.1vw black;
`;
