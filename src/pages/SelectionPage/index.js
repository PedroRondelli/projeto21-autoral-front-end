import { useContext, useEffect } from "react";
import CustomerContext from "../../contexts/customerContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getArtistProfiles } from "../../services/getArtistProfiles";

export default function SelectionPage() {
  const { customer, setCustomer } = useContext(CustomerContext);
  const { listOfAllArtists, setList } = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (customer.name === "") navigate("/customer");
    setList(getArtistProfiles());
  }, [customer.name, navigate, setList]);
}
