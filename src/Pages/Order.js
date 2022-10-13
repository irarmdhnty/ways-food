import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Stack,
} from "react-bootstrap";

import mapIcon from "../assets/map-icon.png";
import trash from "../assets/trash-icon.svg";
import { carts } from "../DataDummy/Cart";

function Order() {
  return (
    <Container>
      <h2 className="mt-5 mb-4">Geprek Bensu</h2>
      <h5 className=" mb-3">Delivery Location</h5>
      <Form className="row mb-5">
        <Form.Group className="mb-3 col-12 col-lg-9">
          <Form.Control
            type="text"
            placeholder="Enter location"
            className="p-2 border-0 border-form border-dark"
          />
        </Form.Group>
        <Form.Group className="col-12 col-lg-3">
          <Button type="submit" className="btn-map btn-nav p-2 mb-3">
            Select on Map <img src={mapIcon} alt="asfdfa"></img>
          </Button>
        </Form.Group>
      </Form>
      <div className="mt-4">
        <p className="fw-bold fs-5">Review Your Order</p>
        <Row>
          <Col className="col-lg-8">
            <hr />
          </Col>
          <Col className="d-none d-lg-block">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            {carts.map((item, index) => (
              <Col key={index}>
                <Row className="d-flex align-items-center">
                  <Col>
                    <Row className="d-flex align-items-center text-start">
                      <Col className="col-3">
                        <img
                          src={item.image}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col className="col-9 ps-5 ps-lg-0">
                        <h6 className="my-3 ff-abhaya fw-bold">{item.name}</h6>
                        <h6 className="my-3 ff-avenir">
                          <span className="m-2">-</span>
                          <Button className="bg-light border-0 rounded text-dark">
                            {item.qty}
                          </Button>
                          <span className="m-2">+</span>
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-4 text-end">
                    <h6 className="text-danger my-3">{item.price}</h6>
                    <h6 className="text-danger my-3">
                      <img src={trash} />
                    </h6>
                  </Col>
                </Row>
                <hr />
              </Col>
            ))}
          </Col>

          <Col className="col-12 col-lg-4">
            <Col>
              <Row className="d-flex align-items-center mt-2">
                <Col>
                  <Row className="d-flex align-items-center text-start">
                    <Col className="ff-abhaya">
                      <h6>Subtotal</h6>
                      <h6>Qty</h6>
                      <h6>Ongkir</h6>
                    </Col>
                    <Col className="ff-abhaya text-end">
                      <h6>Rp. 60.000</h6>
                      <h6>2</h6>
                      <h6>Rp. 60.000</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr />
            </Col>

            <Col>
              <Row className="d-flex align-items-center">
                <Col>
                  <Row className="d-flex align-items-center text-start text-danger">
                    <Col className="ff-abhaya">
                      <h6>Total</h6>
                    </Col>
                    <Col className="col-4 text-end ff-avenir">
                      <h6>Rp. 70.000</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>
        </Row>
        <Button className="btn-nav px-5 f-14 fw-bold float-end my-3">Order</Button>
      </div>
    </Container>
  );
}

export default Order;
