import handleForm from "../auxiliaries/handleForm";
import { ReadyButton } from "../assets/ReadyButton";
import { useState } from "react";
import singup from "../services/singupApi";
import { AuthForm } from "../assets/AuthForm";

export default function RegistrationForm({setregistering}){
    const [form, setForm] = useState({ email: "", password: "",confirmation:"" });
  return (
    <>
      <AuthForm onSubmit={(e) => singup(e,form)}>
        <input
          required
          onChange={(e) => handleForm(e, form, setForm)}
          name="email"
          placeholder="EMAIL"
          disabled={false}
          type="email"
        />
        <input
          required
          onChange={(e) => handleForm(e, form, setForm)}
          name="password"
          placeholder="SENHA"
          disabled={false}
          type="password"
        />
        <input
          required
          onChange={(e) => handleForm(e, form, setForm)}
          name="confirmation"
          placeholder="CONFIRME A SENHA"
          disabled={false}
          type="password"
        />
        <ReadyButton disabled={false} type="submit">
          PRONTO
        </ReadyButton>
      </AuthForm>
    </>
  );
}

