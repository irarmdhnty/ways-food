import { Button, Col, Container, Form, Row } from "react-bootstrap";
import iconFile from "../../assets/icon-file.svg";
import FormAll from "../../Components/Atoms/FormAll";

const AddProduct = () => {
  return (
    <Container>
      <h2 className="my-5">Add Product</h2>
      <Form>
        <Row>
          <Col className="col-12 col-md-9">
            <FormAll
              label="Title"
              type="text"
              placeholder="Title"
              className="border-form border-dark"
            />
          </Col>
          <Col className="col-12 col-md-3">
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Form.Control type="file" placeholder="Attach Image" hidden />
              <Form.Label className="border-form border-dark input-img border border-1">
                Attach Image
              </Form.Label>
              <img
                src={iconFile}
                style={{ marginLeft: "-30px", paddingBottom: "8px" }}
              />
            </Form.Group>
          </Col>
        </Row>
        <FormAll
          label="Price"
          type="text"
          placeholder="Price"
          className="border-form border-dark"
        />
        <div className="d-flex justify-content-end">
          <Button className="btn-nav w-25 mt-5 " type="submit">
            Save
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
