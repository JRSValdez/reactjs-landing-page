import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import play_store_img from "../../assets/images/play_store.jpg";
import apple_store_img from "../../assets/images/apple_store.jpg";

import "./buttons.css";

const StoreButtons = ({ className, apple_url, play_url }) => {
  return (
    <div className={className}>
      <Row xs={2}>
        <Col>
          <Link to={apple_url} className="store-buttons">
            <img
              className="img-fluid"
              alt="Apple Store"
              src={apple_store_img}
            />
          </Link>
        </Col>
        <Col>
          <Link to={play_url} className="store-buttons">
            <img className="img-fluid" alt="Play Store" src={play_store_img} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default StoreButtons;
