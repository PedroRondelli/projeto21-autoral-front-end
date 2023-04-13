export default async function logout(supabase, navigate) {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log(error);
  } else {
    localStorage.removeItem("rondelli_token");
    navigate("/");
  }
}
