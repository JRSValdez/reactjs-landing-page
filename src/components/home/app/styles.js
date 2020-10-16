import styled from "styled-components";
import {Col} from 'reactstrap';

export const AppContainer = styled.section`
  position: relative;
  top: -200px;
  padding-top: 200px;
  margin-bottom: -600px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    top: -300px;
  }

  @media only screen and (max-width: 600px) {
    top: -300px;
  }
`;

export const AppImgContainer = styled(Col)`
  position: relative;
  top: -200px;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    margin-bottom: -300px;
  }
`;

export const AppImg = styled.img`
  top: -70px;
  transform: scale(0.9);
  left: 10%;
  position: relative;

  @media only screen and (min-width: 768px) and (max-width: 992px) {
    top: -70px;
    left: -30px;
  }

  @media only screen and (max-width: 600px) {
    top: -220px;
    transform: scale(0.6);
    left: -200px;
  }
`;

export const AppBenefitsContainer = styled(Col)`
  @media only screen and (min-width: 768px) and (max-width: 992px) {
    position:relative;
    top:-100px;
    padding-bottom:200px;
  }

  @media only screen and (max-width: 600px) {
    position:relative;
    top:-700px;
    margin-bottom:-400px;
  }
`;