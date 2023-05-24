import fetchArts from "./fetchArts";

export async function uploadNewArt(e, slot, supabase, setArts, user) {
  e.preventDefault();
  const file = e.target.files[0];
  if (!file) return;
  const { error } = await supabase.storage
    .from("photos")
    .upload(`public/${user.id}/${slot}slot`, file, {
      cacheControl: "0",
      upsert: true,
    });

  if (error) {
    console.log(error);
  } else {
    fetchArts(supabase, user).then((resp) => {
      console.log(resp);
      setArts(resp);
    });
  }
}
