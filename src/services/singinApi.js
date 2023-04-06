import axios from "axios";

export default function singin(form) {
  axios
    .post("http://localhost:4000/tattoArtist/", form)
    .then((resp) => {
      console.log(resp.data);
      console.log("deu certo");
    })
    .catch((error) => {
        console.log("deu errado")
        console.log(error.response.data)
    });
}
