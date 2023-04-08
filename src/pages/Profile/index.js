import { useNavigate } from "react-router-dom";
import { Container } from "../../assets/Container";
import { useEffect } from "react";

export default function Profile(){
    const navigate=useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("rondelli_token");
        if (!token) {
          navigate("/");
        }
      });
    return <Container></Container>
}