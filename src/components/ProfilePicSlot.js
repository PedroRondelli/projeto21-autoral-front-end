import styled from "styled-components";
import { uploadProfilePic } from "../auxiliaries/uploadProfilePic";
import { useContext } from "react";
import ProfilePicContext from "../contexts/profilePicContext";
import profilePic from "../assets/images/profile.jpeg";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";

export function ProfilePicSlot() {
  const { profileImg, setProfileImage } = useContext(ProfilePicContext);
  const supabase = useSupabaseClient();
  const user = useUser();
  return (
    <ProfilePic>
      <input
        onChange={(e) => uploadProfilePic(e, supabase, setProfileImage, user)}
        type="file"
      ></input>
      {profileImg.name !== undefined && (
        <img
          src={
            process.env.REACT_APP_PROFILE +
            profileImg.name +
            `?t=${profileImg.updated_at}`
          }
          alt="profile pic"
        />
      )}
    </ProfilePic>
  );
}

const ProfilePic = styled.label`
  width: 140px;
  height: 140px;

  background: url(${profilePic});
  background-size: 100%;

  input {
    display: none;
  }
  cursor: pointer;

  border-radius: 70px;
  filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.35));
`;
