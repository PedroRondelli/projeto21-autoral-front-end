import axios from "axios";

export default function singin(e,form,navigate) {
  e.preventDefault()
  axios
    .post("http://localhost:4000/tattoArtist/login", form)
    .then((resp) => {
      localStorage.setItem("rondelli_token",resp.data)
      navigate("/profile")
      
    })
    .catch((error) => {
        alert(error.response.data)
    });
}
