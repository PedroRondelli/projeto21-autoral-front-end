import { useContext, useEffect } from "react";
import CustomerContext from "../../contexts/customerContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getArtistProfiles } from "../../services/getArtistProfiles";
import { Form } from "../../components/DescriptionForm";
import { Container, PhotoContainer } from "../ProfileEditionPage";

export default function SelectionPage() {
  const { customer, setCustomer, listOfAllArtists, setList } =
    useContext(CustomerContext);

  const navigate = useNavigate();
  useEffect(() => {
    if (customer.name === "") navigate("/customer");
    getArtistProfiles(setList);
  }, [customer.name, navigate, setList]);

  return (
    <Container>
      <Form></Form>
      <PhotoContainer></PhotoContainer>
    </Container>
  );
}
