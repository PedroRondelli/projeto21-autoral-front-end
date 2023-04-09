import styled from "styled-components";

export const ReadyButton = styled.button`
  border: 10px solid #000000;
  border-radius: 32px;
  height: auto;
  width: 17vw;

  display: ${(props) => (props.formDone ? "none" : "initial")};

  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 2vw;
  line-height: 57px;
  color: black;
`;
