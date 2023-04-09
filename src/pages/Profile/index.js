import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";
import profilePic from "../../assets/images/profile.jpeg";
import { Container } from "../../assets/Container";
import { ReadyButton } from "../../assets/ReadyButton";
import Portfolio from "../../components/Portifolio";

export default function Profile() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("rondelli_token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <Container>
      <PhotoContainer>
        <img src={profilePic} alt="profile pic" />
        <ReadyButton onClick={() => navigate("/edition")}>EDITAR</ReadyButton>
      </PhotoContainer>
      <Portfolio />
    </Container>
  );
}

const PhotoContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 10px;
  img {
    width: 140px;
    height: 140px;
    background: blue;
    border-radius: 70px;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.35));
  }
`;
