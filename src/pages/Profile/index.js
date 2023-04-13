import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import profilePic from "../../assets/images/profile.jpeg";
import { Container } from "../../assets/Container";
import { ReadyButton } from "../../assets/ReadyButton";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import fetchArts from "../../auxiliaries/fetchArts";
import fetchProfilePic from "../../auxiliaries/fechProfilePic";
import ProfilePicContext from "../../contexts/profilePicContext";
import logout from "../../services/logout";

export default function Profile() {
  const supabase = useSupabaseClient();
  const slots = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  const [arts, setArts] = useState([]);
  // const [profileImg, setProfileImage] = useState({});
  const { profileImg, setProfileImage } = useContext(ProfilePicContext);

  const navigate = useNavigate();

  async function uploadNewArt(e, slot) {
    e.preventDefault();
    const file = e.target.files[0];

    const { error } = await supabase.storage
      .from("photos")
      .upload(`public/${slot}slot`, file, {
        cacheControl: "10",
        upsert: true,
      });
    if (error) {
      console.log(error);
    } else {
      fetchArts(supabase).then((resp) => setArts(resp));
    }
  }
  async function uploadProfilePic(e) {
    e.preventDefault();
    const file = e.target.files[0];

    const { error } = await supabase.storage
      .from("profilePic")
      .upload(`public/profilePic`, file, {
        cacheControl: "10",
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
        <ProfilePic>
          <input onChange={(e) => uploadProfilePic(e)} type="file"></input>
          {profileImg.name !== undefined && (
            <img
              src={process.env.REACT_APP_PROFILE + profileImg.name}
              alt="profile pic"
            />
          )}
        </ProfilePic>
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
            <Art>
              <input
                onChange={(event) => uploadNewArt(event, e.id)}
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
  height: 75%;
  width: 10vw;
  border-radius: 32px;
  background-color: white;

  img {
    height: 100%;
    width: 10vw;
    border-radius: 32px;
    /* display: ${(props) =>
      props.status === "empty" ? "none" : "initial"}; */
  }

  input {
    display: none;
  }
  cursor: pointer;
`;

const Portfolio = styled.div`
  width: 100vw;
  height: 40vh;
  background-color: #444040;
  box-shadow: 0px -10px 4px rgba(0, 0, 0, 0.5);

  padding: 30px;
  box-sizing: border-box;

  display: flex;
  justify-content: space-around;
`;
