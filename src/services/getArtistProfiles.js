import axios from "axios";

export function getArtistProfiles() {
  let listOfArtistProfiles;
  axios
    .get(process.env.REACT_APP_BACKURL + "/customer/profiles")
    .then((resp) => {
      listOfArtistProfiles = resp.data;
    })
    .catch((error) => {
      alert(error.response.data);
    });
  return listOfArtistProfiles;
}
