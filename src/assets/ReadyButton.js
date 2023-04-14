import styled from "styled-components";

export const ReadyButton = styled.button`
  border: solid #000000;
  border-radius: max(0px, min(16px, (100% - 1px + 1px) * 9999)) / 16px;
  height: auto;
  width: 17vw;
  box-sizing: border-box;
  display: ${(props) => (props.formDone ? "none" : "initial")};

  font-family: "Saira Stencil One";
  font-style: normal;
  font-weight: 400;
  font-size: 2vw;
  line-height: 5vh;
  color: black;
  
  @media(max-width:414px){
    font-size: 3vw;
  }
`;
