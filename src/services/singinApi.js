import axios from "axios";

export default function singin(e, form, navigate, supabase) {
  e.preventDefault();
  axios
    .post("http://localhost:4000/tattoArtist/login", form)
    .then(async (resp) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });
        if (error) {
          console.log(error);
        } else {
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
      localStorage.setItem("rondelli_token", resp.data);
      navigate("/profile");
    })
    .catch((error) => {
      alert(error.response.data);
    });
}
