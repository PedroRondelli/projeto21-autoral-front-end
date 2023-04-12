import { useState } from "react";
import handleForm from "../auxiliaries/handleForm";
import singin from "../services/singinApi";
import { ReadyButton } from "../assets/ReadyButton";
import { AuthForm } from "../assets/AuthForm";
import { useNavigate } from "react-router-dom";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const supabase = useSupabaseClient();
  const navigate = useNavigate();
  return (
    <>
      <AuthForm onSubmit={(e) => singin(e, form,navigate,supabase)}>
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
        <ReadyButton disabled={false} type="submit">
          PRONTO
        </ReadyButton>
      </AuthForm>
    </>
  );
}
