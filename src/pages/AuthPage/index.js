import { useState } from "react";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import styled from "styled-components";

export default function AuthPage() {
  const [registering, setregistering] = useState(false);
  return (
    <Container>
      {registering ? (
        <h1>Vai se fuder</h1>
        // <LoginForm setregistering={setregistering} />
      ) : (
        <h1>Vai tomar no cu</h1>
        // <RegistrationForm setregistering={setregistering} />
      )}
    </Container>
  );
}

const Container = styled.div`

`;
