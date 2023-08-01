import { useContext, useEffect } from "react";
import CustomerContext from "../../contexts/customerContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getArtistProfiles } from "../../services/getArtistProfiles";
import { Form } from "../../components/DescriptionForm";
import { Container, PhotoContainer } from "../ProfileEditionPage";
import { ReadyButton } from "../../assets/ReadyButton";
import { changeArtist } from "../../auxiliaries/changeArtist";

export default function SelectionPage() {
  const { customer, listOfAllArtists, setList } = useContext(CustomerContext);
  const [turn, setTurn] = useState(0);
  console.log(turn);
  const navigate = useNavigate();
  useEffect(() => {
    if (customer.name === "") navigate("/customer");
    getArtistProfiles(setList);
  }, [customer.name, navigate, setList]);

  return (
    <Container>
      <Form></Form>
      <PhotoContainer>
        <img alt="profile pic" />
        <icons>
          <ion-icon
            onClick={() =>
              changeArtist("backward", setTurn, turn, listOfAllArtists.length)
            }
            name="arrow-back-circle"
          ></ion-icon>
          <ion-icon
            onClick={() =>
              changeArtist("forward", setTurn, turn, listOfAllArtists.length)
            }
            name="arrow-forward-circle"
          ></ion-icon>
        </icons>
        <ReadyButton>ESCOLHER</ReadyButton>
      </PhotoContainer>
    </Container>
  );
}

//<ion-icon name="arrow-back-circle"></ion-icon>
//<ion-icon name="arrow-forward-circle"></ion-icon>
