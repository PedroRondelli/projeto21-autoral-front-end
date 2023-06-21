import styled from "styled-components";
import { Container } from "../../assets/Container";
import { StudioName } from "../../assets/StudioName";
import { ReadyButton } from "../../assets/ReadyButton";
import { AuthForm } from "../../assets/AuthForm";
import { useContext } from "react";
import CustomerContext from "../../contexts/customerContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function CustomerPage() {
  const { customer, setCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();
  useEffect(()=>{
    if(customer.name!=="")navigate("/selection")
  },[customer.name,navigate])
  return (
    <Container>
      <StudioName className="letterPattern">RONDELLI TATTOO</StudioName>
      <WelcomeMessage className="letterPattern">
        SEJA BEM VINDO (a)!
      </WelcomeMessage>
      <AuthForm
        onSubmit={(e) => {
          e.preventDefault();
          setCustomer({ ...customer, name: e.target[0].value });

        }}
      >
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
