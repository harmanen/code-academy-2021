import React, { useEffect } from "react";
import { Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import AddCar from "./AddCar";
import Car from "./Car";
import "./Cars.css";
import { getCars } from "./carsSlice";

export default function Cars(props) {
  const { carList, loading, error } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  if (error) {
    return error;
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <React.Fragment>
      <AddCar />
      <Row id="cars">
        {carList.map((car) => (
          <Car
            key={car.id}
            make={car.make}
            model={car.model}
            carId={car.id}
          />
        ))}
      </Row>
    </React.Fragment>
  );
}
