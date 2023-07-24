import axios from "axios";

export function getArtistProfiles(){
    axios
    .post(process.env.REACT_APP_BACKURL + "/customer/profile")
    .then((resp) => {})
    .catch((error) => {
      alert(error.response.data);
    });
};