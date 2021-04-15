import React from "react";
import { Field, Form, Formik } from "formik";
import { Button, Input, Row, Col } from "reactstrap";

export default function AddCar(props) {
  const { onCarAdded } = props;
  const onSubmit = (values, actions) => {
    fetch("/api/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => onCarAdded(data));
  };
  return (
    <Formik initialValues={{ make: "ford", model: "" }} onSubmit={onSubmit}>
      <Form>
        <Row>
          <Col>
            <Field as={Input} type="select" name="make" placeholder="Make">
              <option value="ford">Ford</option>
              <option value="honda">Honda</option>
              <option value="skoda">Skoda</option>
              <option value="volvo">Volvo</option>
            </Field>
          </Col>
          <Col>
            <Field as={Input} type="text" name="model" placeholder="Model" />
          </Col>
          <Col>
            <Button type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </Formik>
  );
}