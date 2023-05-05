import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import profilePic from "../../assets/images/profile.jpeg";
import { ReadyButton } from "../../assets/ReadyButton";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import fetchArts from "../../auxiliaries/fetchArts";
import fetchProfilePic from "../../auxiliaries/fechProfilePic";
import ProfilePicContext from "../../contexts/profilePicContext";
import logout from "../../services/logout";
import backGroundImage from "../../assets/images/backGroundImage.jpg";
import { uploadNewArt } from "../../auxiliaries/uploadArt";
import { uploadProfilePic } from "../../auxiliaries/uploadProfilePic";
import { ProfilePicSlot } from "../../components/ProfilePicSlot";

export default function Profile() {
  const supabase = useSupabaseClient();
  const slots = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [arts, setArts] = useState([]);
  const { profileImg, setProfileImage } = useContext(ProfilePicContext);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("rondelli_token");
    if (!token) {
      navigate("/");
    }

    fetchArts(supabase).then((resp) => setArts(resp));
    fetchProfilePic(supabase).then((resp) => {
      const isThereProfilePic = resp.find(
        (element) => element.name === "profilePic"
      );
      if (isThereProfilePic) setProfileImage(isThereProfilePic);
    });
  }, []);

  return (
    <Container>
      <PhotoContainer>
        <ProfilePicSlot />
        <ReadyButton onClick={() => navigate("/edition")}>EDITAR</ReadyButton>
        <ion-icon
          onClick={() => logout(supabase, navigate)}
          size="large"
          name="exit-outline"
        ></ion-icon>
      </PhotoContainer>
      <Portfolio>
        {slots.map((e, i) => {
          const isThereArtForThisSlot = arts.find(
            (element) => element.name.replace("slot", "") === e.id.toString()
          );
          return (
            <Art key={i}>
              <input
                onChange={(event) =>
                  uploadNewArt(event, e.id, supabase, setArts)
                }
                type="file"
              ></input>
              {isThereArtForThisSlot && (
                <img
                  src={
                    process.env.REACT_APP_BUCKET + isThereArtForThisSlot.name
                  }
                  alt={`Art${e.id}`}
                />
              )}
            </Art>
          );
        })}
      </Portfolio>
    </Container>
  );
}

const PhotoContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
  img {
    width: 140px;
    height: 140px;

    border-radius: 70px;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.35));
  }
  ion-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    color: white;

    cursor: pointer;
  }
  @media (max-width: 768px) {
    height: 30vh;
    justify-content: center;
    button {
      margin-top: 15px;
    }
  }
`;
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
const Art = styled.label`
  height: 250px;
  width: 20%;
  border-radius: 32px;
  background-color: white;
  display: flex;
  justify-content: center;

  img {
    height: 100%;
    width: 100%;
    border-radius: 32px;
  }

  input {
    display: none;
  }
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin: 10px auto;
  }
`;

const Portfolio = styled.div`
  width: 100vw;
  min-height: 40vh;
  background-color: #444040;
  box-shadow: 0px -10px 4px rgba(0, 0, 0, 0.5);

  padding: 30px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;

  @media (max-width: 768px) {
    min-height: 70vh;
    flex-direction: column;
  }
`;
const Container = styled.div`
  background-image: url(${backGroundImage});
  background-size: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
