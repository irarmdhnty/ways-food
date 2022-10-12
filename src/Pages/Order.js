import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Stack,
} from "react-bootstrap";

import mapIcon from "../assets/map-icon.png";
import geprek from "../assets/geprek.svg";
import trash from "../assets/trash-icon.svg";

function Order() {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Geprek Bensu</h2>
      <div>
        <p className="fw-bold">Delivery Location</p>
        <Row>
          <Col className="col-12 col-md-9">
            <Card>
              <Card.Text className="p-2">Harbour Building</Card.Text>
            </Card>
          </Col>
          <Col className="col-12 col-md-3">
            <Button className="btn-map">
              Select On Map
              <img src={mapIcon} className="ms-3" />
            </Button>
          </Col>
        </Row>
      </div>
      <div className="mt-4">
        <p className="fw-bold fs-5">Review Your Order</p>
        <Row>
          <Col className="col-12 col-md-7">
            <Card className="border border-dark border-start-0 border-end-0 rounded-0">
              <Card.Body>
                <Row>
                  <Col>
                    <img src={geprek} />
                  </Col>
                  <Col>
                    <p>Paket geprek</p>
                    <Stack direction="horizontal" gap={3}>
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </Stack>
                  </Col>
                  <Col style={{ textAlign: "end" }}>
                    <p className="text-price">Rp 15.000</p>
                    <img src={trash} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-12 col-md-7">
            <Card className="col-12 col-md-12 border border-dark border-start-0 border-end-0 rounded-0">
              <Card.Body>
                <Row>
                  <Col>
                    <img src={geprek} />
                  </Col>
                  <Col>
                    <p>Paket geprek</p>
                    <Stack direction="horizontal" gap={3}>
                      <p>-</p>
                      <p>1</p>
                      <p>+</p>
                    </Stack>
                  </Col>
                  <Col style={{ textAlign: "end" }}>
                    <p className="text-price">Rp 15.000</p>
                    <img src={trash} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-12 col-md-5 mt-3 position-absolute top-50 end-0">
            <Row className="d-flex justify-content-between border border-dark border-start-0 border-end-0 rounded-0 ">
              <Col>
                <p>Subtotal</p>
                <p>Qty</p>
                <p>Ongkir</p>
              </Col>
              <Col style={{ textAlign: "end" }}>
                <p className="text-price">Rp 35.000</p>
                <p>2</p>
                <p className="text-price">Rp 10.000</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fw-bold text-price">Total</p>
              </Col>
              <Col  style={{ textAlign: "end" }}>
                <p className="text-price">Rp. 12.000</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <Button className="btn-nav w-25">Order</Button>
      </div>
    </Container>
  );
}

export default Order;
