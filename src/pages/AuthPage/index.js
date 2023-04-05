import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import styled from "styled-components";
import backGroundImage from "../../assets/images/backGroundImage.jpg";

export default function AuthPage() {
  const [registering, setregistering] = useState(false);
  return (
    <Container>
      <StudioName>RONDELLI TATTOO</StudioName>
      {registering ? (
        <RegistrationForm setregistering={setregistering} />
      ) : (
        <LoginForm setregistering={setregistering} />
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
`;
const StudioName = styled.span`
  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 10vw;
  line-height: 201px;
  width: 90vw;
  text-align: center;
  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
