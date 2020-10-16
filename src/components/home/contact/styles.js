import styled from "styled-components";
export const ContactContainer = styled.section`
  background-color: black;
  color: white;
  position: relative;
  top: -100px;
  padding-top: 100px;
  padding-left: 200px;
  padding-right: 200px;
  padding-bottom: 100px;
  z-index: 0;

  & input {
    background-color: black;
  }

  & input:focus {
    color: #ffc700;
    background-color: black;
    border-color: #ffc700;
  }

  & textarea {
    background-color: black;
  }

  & textarea:focus {
    color: #ffc700;
    background-color: black;
    border-color: #ffc700;
  }

  & textarea {
    height: 120px !important;
  }

  @media only screen and (max-width: 600px) {
    padding: 20px;
    padding-bottom: 300px;
  }

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 300px;
  }
`;

export const ThankYouContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: black;
  height: 100% !important;
  width:100%;
  align-items: center !important;
  justify-content:center;

`;
