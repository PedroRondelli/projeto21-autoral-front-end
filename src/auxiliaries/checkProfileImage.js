export function checkProfileImage(resp,setProfileImage,user){
    const isThereProfilePic = resp.find(
      (element) => element.name === user.id
    );
    if (isThereProfilePic) setProfileImage(isThereProfilePic);
  }