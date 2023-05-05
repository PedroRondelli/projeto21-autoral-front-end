import fetchArts from "./fetchArts";

export async function uploadNewArt(e, slot, supabase, setArts) {
  e.preventDefault();
  const file = e.target.files[0];

  const { error } = await supabase.storage
    .from("photos")
    .upload(`public/${slot}slot`, file, {
      cacheControl: "1",
      upsert: true,
    });
  if (error) {
    console.log(error);
  } else {
    fetchArts(supabase).then((resp) => setArts(resp));
  }
}
