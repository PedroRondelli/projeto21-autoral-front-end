import axios from "axios";

export async function getArtistProfiles(setList) {
  try {
    axios
      .get(process.env.REACT_APP_BACKURL + "/customer/profiles")
      .then((resp) => {
        setList(resp.data);
      })
      .catch((error) => {
        alert(error.response.data);
      });
  } catch (error) {
    console.log(error);
  }
}
