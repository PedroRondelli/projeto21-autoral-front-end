import axios from "axios";

export default async function testeBackend() {
  try {
    axios
      .get(process.env.REACT_APP_BACKURL + "/teste")
      .then((resp) => {
        alert("conectado");
        console.log(resp);
      })
      .catch(()=>{alert("algo deu errado")});
  } catch (error) {
    alert(error);
  }
}
