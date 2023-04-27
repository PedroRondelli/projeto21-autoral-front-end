import axios from "axios";

export default function singup(e, form, setregistering, supabase) {
  e.preventDefault();

  axios
    .post(process.env.REACT_APP_BACKURL + "/tattoArtist/registration", form)
    .then(async () => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: form.email,
          password: form.password,
        });
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
      alert("Cadastro Feito");
      setregistering(false);
    })
    .catch(() => {
      alert("Erro no cadastro");
    });
}
