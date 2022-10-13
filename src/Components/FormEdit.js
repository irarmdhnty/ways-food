import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import iconFile from "../assets/icon-file.svg";
import mapIcon from "../assets/map-icon.png";
import FormAll from "./Atoms/FormAll";

const FormEdit = () => {
  const navigate = useNavigate();

  return (
    <Form>
      <Row>
        <Col className="col-12 col-md-9">
          <FormAll
            label="Full Name"
            type="text"
            placeholder="Full Name"
            className="border-form border-dark"
          />
        </Col>
        <Col className="col-12 col-md-3">
          <Form.Group className="mb-3 d-flex" controlId="formBasicEmail" style={{  height: '90%' }}>
            <Form.Control type="file" placeholder="Attach Image" hidden />
            <Form.Label className="d-flex align-items-center border-form border-dark input-img border border-1 " >
              Attach Image
            </Form.Label>
            <img
              src={iconFile}
              style={{ marginLeft: "-30px", paddingBottom: "8px", width: '20px' }}
            />
          </Form.Group>
        </Col>
      </Row>
      <FormAll
        label="Email"
        type="email"
        placeholder="Email"
        className="border-form border-dark"
      />
      <FormAll
        label="Phone"
        type="email"
        placeholder="Phone"
        className="border-form border-dark"
      />
      <Row>
        <Col className="col-12 col-md-9">
          <FormAll
            label="Location"
            type="text"
            placeholder="Location"
            className="border-form border-dark"
          />
        </Col>
        <Col className="col-12 col-md-3">
          <Button className="btn-map" onClick={() => }>
            Select On Map
            <img src={mapIcon} className="ms-3" />
          </Button>
        </Col>
      </Row>
      <div className="d-flex justify-content-end">
        <Button
          className="btn-nav w-25 mt-5 "
          type="submit"
          onClick={() => navigate('/profile')}
        >
          Save
        </Button>
      </div>
    </Form>
  );
};

export default FormEdit;
