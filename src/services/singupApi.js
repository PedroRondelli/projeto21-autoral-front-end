import axios from "axios";

export default function singup(e, form, setregistering) {
  e.preventDefault();
  console.log("chamou singup");
  axios
    .post("http://localhost:4000/tattoArtist/registration", form)
    .then(() => {
      alert("Cadastro Feito");
      setregistering(false);
    })
    .catch(() => {
      alert("Erro no cadastro");
    });
}
