import styled from "styled-components";

export const SubmitButtonStyle = styled.button`
  color: black;
  font-weight: bold;
  background: #ffd600;
  font-size: large;
  padding: 5px;
  border-radius: 4px;
  border: none;
  float: right;

  &:hover {
    background-color: #ffea79;
  }
`;

export const ThankYouButtonStyle = styled(SubmitButtonStyle)`
  text-decoration: none;
  text-align:center;
  float: none;
  &:hover {
    text-decoration: none;
  }
`;

export const TextButtonStyle = styled.p`
  font-size: larger;
  font-weight: bold;
  text-align: left;
  color: black;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const FooterButtonStyle = styled(TextButtonStyle)`
  color: rgba(0, 0, 0, 0.4);
  font-size: large;
  text-align: center;
`;

export const SwitchButtonStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  background-color: ${(props) => (props.active ? "#000" : "#FFF")};
  color: ${(props) => (props.active ? "#FFF" : "#000")};
  font-size: larger;
  font-weight: bold;

  & svg {
    position: relative;
    margin: 5px;
  }
`;
