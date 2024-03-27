import styled from "styled-components";

export default function SuccessPage() {
  return (
    <SuccessPageWrapper>
      <SuccessIconBox>
        <ion-icon name="chevron-down-circle-outline"></ion-icon>
      </SuccessIconBox>
      <SuccessText>Sessão marcada com sucesso ! !</SuccessText>
    </SuccessPageWrapper>
  );
}

const SuccessPageWrapper = styled.div`
  background-color: #008000;
  min-height: 100vh;
`;
const SuccessIconBox = styled.div`
  display: flex;
  justify-content: center;
  ion-icon {
    color: white;
    font-size: 500px;
  }
`;
const SuccessText = styled.p`
  color: #ffff;
  font-family: "Saira Stencil One";
  font-size: 3vw;
  text-align: center;
`;
