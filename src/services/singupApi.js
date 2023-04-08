import axios from "axios";

export default function singup(e,form) {
  e.preventDefault()
  axios
    .post("http://localhost:4000/tattoArtist/registration", form)
    .then((resp) => {
      
    })
    .catch((error) => {
        alert(error.response.data)
    });
}

