import { useState } from "react";
import { createContext } from "react";

const ProfilePicContext = createContext();
export default ProfilePicContext;

export function ProfilePicProvider({ children }) {
  const [profileImg, setProfileImage] = useState({});

  return (
    <ProfilePicContext.Provider
      value={{ profileImg,setProfileImage }}
    >
      {children}
    </ProfilePicContext.Provider>
  );
}
