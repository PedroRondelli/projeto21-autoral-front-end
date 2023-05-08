import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import backGroundImage from "../../assets/images/backGroundImage.jpg";
import handleForm from "../../auxiliaries/handleForm";
import { ReadyButton } from "../../assets/ReadyButton";
import editProfile from "../../services/editProfileApi";
import ProfilePicContext from "../../contexts/profilePicContext";
import fetchProfilePic from "../../auxiliaries/fechProfilePic";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { checkProfileImage } from "../../auxiliaries/checkProfileImage";
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
  useEffect(() => {
    const token = localStorage.getItem("rondelli_token");
    if (!token) {
      navigate("/");
    }
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
    fetchProfilePic(supabase).then((resp) => checkProfileImage(resp,setProfileImage));
  });

  return (
    <Container>
      <Form>
        <input
          required
          onChange={(e) => handleForm(e, form, setForm)}
          name="name"
          placeholder="NOME"
        ></input>
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          required
          name="nickname"
          placeholder="APELIDO"
        ></input>
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          required
          name="about"
          placeholder="SOBRE VOCÊ"
        ></input>
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          required
          name="specialties"
          placeholder="ESPECIALIDADES"
        ></input>
        <input
          onChange={(e) => handleForm(e, form, setForm)}
          required
          name="thank"
          placeholder="AGRADECIMENTO"
        ></input>
      </Form>
      <PhotoContainer>
        {profileImg.name !== undefined && (
          <img
            src={process.env.REACT_APP_PROFILE + profileImg.name}
            alt="profile pic"
          />
        )}
        <ReadyButton
          formDone={!formDone}
          onClick={(e) => editProfile(form, navigate)}
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
const Form = styled.form`
  width: 50vw;
  height: 100vh;

  padding: 20px;
  box-sizing: border-box;

  background-color: #444040;
  box-shadow: 10px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    border-radius: 32px;
    height: 11vh;
    padding: 10px;

    box-sizing: border-box;

    font-family: Saira Stencil One;
    font-size: 2vw;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
  }
  @media (max-width: 414px) {
    width: 100vw;
    height:70vh;
    justify-content: flex-start;
    input {
      font-size: 3vw;
      margin: 10px auto;
      height: 8vh;
      width: 100%;
    }
  }
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
