export function checkProfileImage(resp,setProfileImage){
    const isThereProfilePic = resp.find(
      (element) => element.name === "profilePic"
    );
    if (isThereProfilePic) setProfileImage(isThereProfilePic);
  }