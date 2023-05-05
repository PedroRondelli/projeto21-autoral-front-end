import fetchProfilePic from "./fechProfilePic";

export async function uploadProfilePic(e, supabase, setProfileImage) {
  e.preventDefault();
  const file = e.target.files[0];

  const { error } = await supabase.storage
    .from("profilePic")
    .upload(`public/profilePic`, file, {
      cacheControl: "1",
      upsert: true,
    });
  if (error) {
    console.log(error);
  } else {
    fetchProfilePic(supabase).then((resp) => {
      const isThereProfilePic = resp.find(
        (element) => element.name === "profilePic"
      );
      if (isThereProfilePic) setProfileImage(isThereProfilePic);
    });
  }
}
