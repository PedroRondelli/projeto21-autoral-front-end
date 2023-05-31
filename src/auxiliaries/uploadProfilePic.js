import fetchProfilePic from "./fechProfilePic";

export async function uploadProfilePic(e, supabase, setProfileImage,user) {
  e.preventDefault();

  const file = e.target.files[0];
  if (!file) return;
  const { error } = await supabase.storage
    .from("profilePic")
    .upload(`public/${user.id}`, file, {
      cacheControl: "0",
      upsert: true,
    });
  if (error) {
    console.log(error);

  } else {
    fetchProfilePic(supabase,user).then((resp) => {
      const isThereProfilePic = resp.find(
        (element) => element.name === user.id
      );
      if (isThereProfilePic) setProfileImage(isThereProfilePic);
    });
  }
}
