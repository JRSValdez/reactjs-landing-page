import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";

import play_store_img from "../../../assets/images/play_store.jpg";
import apple_store_img from "../../../assets/images/apple_store.jpg";

const StoreButtons = ({ className, apple_url, play_url }) => {
  return (
    <div className={className}>
      <Row xs={2}>
        <Col>
          <Link to={{pathname:apple_url}} target='_blank' >
            <img
              className="img-fluid"
              alt="Apple Store"
              src={apple_store_img}
            />
          </Link>
        </Col>
        <Col>
          <Link to={{pathname:play_url}} target='_blank' >
            <img className="img-fluid" alt="Play Store" src={play_store_img} />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default StoreButtons;
