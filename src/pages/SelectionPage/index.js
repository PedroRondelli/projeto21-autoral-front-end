import { useContext, useEffect } from "react";
import CustomerContext from "../../contexts/customerContext";
import { useNavigate } from "react-router-dom";

export default function SelectionPage() {
  const { customer, setCustomer } = useContext(CustomerContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (customer.name === "") navigate("/customer");
  }, [customer.name, navigate]);
}
