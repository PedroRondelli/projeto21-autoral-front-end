import handleForm from "../auxiliaries/handleForm";
import { ReadyButton } from "../assets/ReadyButton";
import { useState } from "react";
import singup from "../services/singupApi";
import { AuthForm } from "../assets/AuthForm";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

export default function RegistrationForm({setregistering}){
    const [form, setForm] = useState({ email: "", password: "",confirmation:"" });
    const supabase = useSupabaseClient();
    
  return (
    <>
      <AuthForm onSubmit={(e) => singup(e,form,setregistering,supabase)}>
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

