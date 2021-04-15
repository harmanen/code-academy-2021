import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import AddCar from "./AddCar";
import Car from "./Car";
import "./Cars.css";

export default function Cars(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("api/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.log(err));
  }, []);

  const onDelete = (id) => {
    fetch(`/api/cars/${id}`, {
      method: "DELETE",
    }).then(() => setCars(cars.filter(car => car.id !== id)));
  };

  return (
    <>
      <AddCar />
      <Row id="cars">
        {cars.map((car) => (
          <Car
            key={car.id}
            make={car.make}
            model={car.model}
            onClick={() => onDelete(car.id)}
          />
        ))}
      </Row>
    </>
  );
}
