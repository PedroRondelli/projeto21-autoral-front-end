import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import profilePic from "../../assets/images/profile.jpeg";
import { Container } from "../../assets/Container";
import { ReadyButton } from "../../assets/ReadyButton";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import fetchArts from "../../auxiliaries/fetchArts";

export default function Profile() {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [arts, setArts] = useState([]);
  const navigate = useNavigate();
  console.log(arts);

  async function uploadNewArt(e) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);

    const { data, error } = await supabase.storage
      .from("photos")
      .upload("public/avatar4", file, {
        cacheControl: "3600",
        upsert: false,
      });
    if (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("rondelli_token");
    if (!token) {
      navigate("/");
    }

    fetchArts(supabase).then((resp) => setArts(resp));
  }, []);

  return (
    <Container>
      <PhotoContainer>
        <img src={profilePic} alt="profile pic" />
        <ReadyButton onClick={() => navigate("/edition")}>EDITAR</ReadyButton>
      </PhotoContainer>
      <Portfolio>
        {arts.map((e, i) => {
          const url = process.env.REACT_APP_BUCKET + "/" + e.name;
          return (
            <Art url={url} key={i}>
              <input onChange={(e) => uploadNewArt(e)} type="file"></input>
              <img alt={`Art${i}`} src={url} />
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
    background: blue;
    border-radius: 70px;
    filter: drop-shadow(0px 10px 4px rgba(0, 0, 0, 0.35));
  }
`;
const Art = styled.label`
  height: 75%;
  width: 10vw;
  border-radius: 32px;

  img {
    height: 100%;
    width: 10vw;
    border-radius: 32px;
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
