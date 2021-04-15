import React from "react";
import { Col } from "reactstrap";

export default function Car(props) {
  const { make, model, onClick } = props;
  return (
    <Col>
      <div
        make={make}
        className="car rounded-circle text-center"
        onClick={onClick}
      >
        {model}
      </div>
    </Col>
  );
}
