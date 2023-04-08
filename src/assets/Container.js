import styled from "styled-components";
import backGroundImage from "../assets/images/backGroundImage.jpg";

export const Container = styled.div`
  background-image: url(${backGroundImage});
  background-size: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;