import axios from "axios";

export default function editProfile(form, navigate) {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("rondelli_token")}`,
    },
  };

  axios
    .post(process.env.REACT_APP_BACKURL + "/tattoArtist/profile", form, config)
    .then((resp) => {
      alert("Perfil Atualizado !");
      navigate("/profile");
    })
    .catch((error) => {
      alert(error.response.data);
    });
}
