import axios from "axios";

export default function singin(e,form) {
  e.preventDefault()
  axios
    .post("http://localhost:4000/tattoArtist/login", form)
    .then((resp) => {
      localStorage.setItem("rondelli_token",resp.data)
    })
    .catch((error) => {
        alert(error.response.data)
    });
}
