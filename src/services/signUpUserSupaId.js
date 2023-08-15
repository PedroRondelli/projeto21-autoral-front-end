import axios from "axios";

export function signUpUserSupaId(id, email) {
  axios
    .patch(process.env.REACT_APP_BACKURL + "/tattoArtist/registration", {
      id,
      email,
    })
    .then()
    .catch();
}
