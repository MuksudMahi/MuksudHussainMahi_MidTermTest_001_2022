import React, { useState } from "react";
import apis from "../api";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import styled from "styled-components";

const Container = styled.div.attrs({
  className: "container",
})`
  margin: auto auto;
  max-width: 500px;
`;

function AddAppointment(props) {
  const [cardNumber, setCardNumber] = useState("");
  const [vaccineSite, setVaccineSite] = useState("");
  const [priorityArea, setPriorityArea] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [cancelled, setCancelled] = useState("");

  const handleAddAppointment = async (event) => {
    event.preventDefault();
    const payload = {
      cardNumber,
      vaccineSite,
      priorityArea,
      dateTime,
      cancelled,
    };

    await apis
      .addAppointment(payload)
      .then((res) => {
        window.alert(res.data.message);
        setCardNumber("");
        setVaccineSite("");
        setPriorityArea("");
        setDateTime("");
        setCancelled("");

        window.location.href = "/";
      })
      .catch((err) => {
        window.alert(err.response.data.message);
      });
  };
  return (
    <Container>
      <Form onSubmit={handleAddAppointment}>
        <h1>Vaccine Appointment</h1>
        <br />
        <Form.Group className="mb-3" size="lg" controlId="formCardNumber">
          <Form.Label>Card Number</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setCardNumber(event.target.value)}
            placeholder="Ex: 123456"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="formVaccineSite">
          <Form.Label>Vaccine Site</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setVaccineSite(event.target.value)}
            placeholder="Ex: Toronto"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="formPriorityArea">
          <Form.Label>Priority Area</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setPriorityArea(event.target.value)}
            placeholder="80+, healthcare, essential"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="formDateTime">
          <Form.Label>Date/Time</Form.Label>
          <Form.Control
            type="date"
            onChange={(event) => setDateTime(event.target.value)}
            placeholder="Vaccine Date"
            required={true}
          />
        </Form.Group>

        <Form.Group className="mb-3" size="lg" controlId="formCancelled">
          <Form.Label>Cancelled</Form.Label>
          <Form.Control
            type="text"
            onChange={(event) => setCancelled(event.target.value)}
            placeholder="true/false"
            required={true}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Appointment
        </Button>
      </Form>
    </Container>
  );
}
export default AddAppointment;
