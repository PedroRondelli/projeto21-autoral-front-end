import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backGroundImage from "../../assets/images/backGroundImage.jpg";
import { ReadyButton } from "../../assets/ReadyButton";
import editProfile from "../../services/editProfileApi";
import ProfilePicContext from "../../contexts/profilePicContext";
import fetchProfilePic from "../../auxiliaries/fechProfilePic";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { checkProfileImage } from "../../auxiliaries/checkProfileImage";
import checkIfLocalStorageHasAToken from "../../auxiliaries/checkIfLocalStorageHasAToken";
import DescriptionForm from "../../components/DescriptionForm";
export default function EditionProfile() {
  const supabase = useSupabaseClient();
  const [formDone, setFormDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    about: "",
    specialties: "",
    thank: "",
  });
  const { profileImg, setProfileImage } = useContext(ProfilePicContext);
  const navigate = useNavigate();
  const user = useUser();
  useEffect(() => {
    checkIfLocalStorageHasAToken(navigate);
    if (
      form.name !== "" &&
      form.nickname !== "" &&
      form.about !== "" &&
      form.specialties !== "" &&
      form.thank !== ""
    ) {
      setFormDone(true);
    } else {
      setFormDone(false);
    }
    fetchProfilePic(supabase, user).then((resp) =>
      checkProfileImage(resp, setProfileImage, user)
    );
  }, [
    navigate,
    supabase,
    setProfileImage,
    user,
    form.name,
    form.nickname,
    form.about,
    form.specialties,
    form.thank,
  ]);

  return (
    <Container>
      <DescriptionForm  form={form} setForm={setForm} />
      <PhotoContainer>
        {profileImg.name !== undefined && (
          <img
            src={process.env.REACT_APP_PROFILE + profileImg.name}
            alt="profile pic"
          />
        )}

        <ReadyButton
          formDone={!formDone}
          onClick={() => editProfile(form, navigate)}
        >
          PRONTO
        </ReadyButton>
      </PhotoContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-image: url(${backGroundImage});
  background-size: 100%;
  @media (max-width: 414px) {
    flex-direction: column-reverse;
  }
  box-sizing: border-box;
`;
const PhotoContainer = styled.div`
  width: 50vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  padding: 20px;
  img {
    width: 140px;
    height: 140px;
    background: blue;
    border-radius: 70px;
  }
  @media (max-width: 414px) {
    width: 100vw;
    height: 30vh;
  }
`;
