import { useState } from "react";
import styled from "styled-components";
import handleForm from "../auxiliaries/handleForm";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  return (
    <>
      <Login>
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          name="email"
          placeholder="EMAIL"
          disabled={false}
          type="email"
        />
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          name="password"
          placeholder="SENHA"
          disabled={false}
          type="password"
        />
        <ReadyButton disabled={false} type="submit">
          PRONTO
        </ReadyButton>
      </Login>
    </>
  );
}

const Login = styled.form`
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

const ReadyButton = styled.button`
  border: 10px solid #000000;
  border-radius: 32px;
  height: auto;
  width: 17vw;

  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 2vw;
  line-height: 57px;
  color: black;
`;
