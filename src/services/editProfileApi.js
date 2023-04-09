import axios from "axios";

export default function editProfile(form, navigate) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("rondelli_token")}`,
    },
  };

  axios
    .post("http://localhost:4000/tattoArtist/profile", form, config)
    .then((resp) => {
      alert("Perfil Atualizado !");
      navigate("/profile");
    })
    .catch((error) => {
      alert(error.response.data);
    });
}
