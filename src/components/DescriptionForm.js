import styled from "styled-components";
import handleForm from "../auxiliaries/handleForm";


export default function DescriptionForm({form,setForm}) {
  return (
    <Form>
      <input
        required
        onChange={(e) => handleForm(e, form, setForm)}
        name="name"
        placeholder="NOME"
      ></input>
      <input
        onChange={(e) => handleForm(e, form, setForm)}
        required
        name="nickname"
        placeholder="APELIDO"
      ></input>
      <input
        onChange={(e) => handleForm(e, form, setForm)}
        required
        name="about"
        placeholder="SOBRE VOCÊ"
      ></input>
      <input
        onChange={(e) => handleForm(e, form, setForm)}
        required
        name="specialties"
        placeholder="ESPECIALIDADES"
      ></input>
      <input
        onChange={(e) => handleForm(e, form, setForm)}
        required
        name="thank"
        placeholder="AGRADECIMENTO"
      ></input>
    </Form>
  );
}

export const Form = styled.form`
  width: 50vw;
  height: 100vh;

  padding: 20px;
  box-sizing: border-box;

  background-color: #444040;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;



  input {
    border-radius: 32px;
    height: 11vh;
    padding: 10px;

    box-sizing: border-box;

    font-family: Saira Stencil One;
    font-size: 2vw;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
  }
  @media (max-width: 414px) {
    width: 100vw;
    min-height: 70vh;
    justify-content: flex-start;
    input {
      font-size: 3vw;
      margin: 10px auto;
      height: 8vh;
      width: 100%;
    }
  }
`;
