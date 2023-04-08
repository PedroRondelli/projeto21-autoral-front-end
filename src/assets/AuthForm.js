import styled from "styled-components";

export const AuthForm = styled.form`
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  input {
    width: 90%;
    height: 12vh;
    margin: 10px;
    border: 10px solid #000000;
    border-radius: 32px;

    padding: 15px;
    box-sizing: border-box;
    ::placeholder {
      font-family: "Saira Stencil One";
      font-style: normal;
      font-weight: 400;
      font-size: 2vw;
      line-height: 57px;
      color: black;
    }
  }
`;