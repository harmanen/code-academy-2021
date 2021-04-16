import React from "react";
import PropTypes from "prop-types";
import { Button, Col } from "reactstrap";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteCar } from "./carsSlice";

export default function Car(props) {
  const dispatch = useDispatch();
  const { make, model, carId } = props;
  return (
    <Col>
      <div make={make} className="car rounded-circle text-center">
        {model}
        <Button
          outline
          color="danger"
          className="car-button-delete"
          onClick={() => dispatch(deleteCar(carId))}
        >
          <FaTimes />
        </Button>
      </div>
    </Col>
  );
}

Car.propTypes = {
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  onDelete: PropTypes.number,
};
