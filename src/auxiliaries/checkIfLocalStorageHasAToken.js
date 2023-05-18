export default function checkIfLocalStorageHasAToken(navigate) {
  const token = localStorage.getItem("rondelli_token");
  if (!token) {
    navigate("/");
  }
}
