import { useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Modal,
  Navbar,
} from "react-bootstrap";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import users from "../assets/users.svg";
import { useNavigate } from "react-router-dom";
import FormAll from "./Atoms/FormAll";

function Navbars() {
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate("/");
  };

  const handleNavigateToProfile = () => {
    navigate("/profile");
  };

  const handleNavigateToOrder = () => {
    navigate("/order");
  };

  const [isLogin, setIsLogin] = useState(false);

  //Login
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShowRegist(false);
    setShow(true);
  };

  //regist
  const [showRegist, setShowRegist] = useState(false);
  const handleCloseRegist = () => setShowRegist(false);
  const handleShowRegist = () => {
    setShow(false);
    setShowRegist(true);
  };

  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container className="d-flex ">
          <Navbar.Brand onClick={handleNavigateToHome}>WaysFood</Navbar.Brand>
          <Navbar.Brand onClick={handleNavigateToHome}>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            {!isLogin ? (
              <div>
                <Button
                  variant="btn btn-nav text-white mx-3"
                  onClick={handleShowRegist}
                >
                  Register
                </Button>
                <Button variant="btn btn-nav text-white" onClick={handleShow}>
                  Login
                </Button>
              </div>
            ) : (
              <div>
                <Dropdown>
                  <img
                    src={cart}
                    className="mx-3"
                    onClick={handleNavigateToOrder}
                  />
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={users} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleNavigateToProfile}>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Body>
            <form>
              <div className="text-yellow m-3">
                <h2>Login</h2>
              </div>
              <div class="m-3">
                <FormAll label="Email" type="email" placeholder="email" />
                <FormAll
                  label="Password"
                  type="password"
                  placeholder="Password"
                />
              </div>
            </form>
            <Button
              onClick={() => {
                handleClose();
                setIsLogin(true);
              }}
              className="btn-order btn-nav px-5"
            >
              Login
            </Button>
            <p className="mt-3">
              Don't have an account ? Klik{" "}
              <span className="fw-bold" onClick={handleShowRegist}>
                Here
              </span>
            </p>
          </Modal.Body>
        </Modal>
      </div>
      <div>
        <Modal show={showRegist} onHide={handleCloseRegist}>
          <Modal.Body>
            <form>
              <div className="text-yellow m-3">
                <h2>Register</h2>
              </div>
              <div>
                <FormAll label="Email" type="email" placeholder="Email" />
                <FormAll label="Email" type="password" placeholder="password" />
                <FormAll
                  label="Full Name"
                  type="text"
                  placeholder="Full Name"
                />
                <Form.Select aria-label="Default select example m-3">
                  <option>Gender</option>
                  <option value="1">Laki-Laki</option>
                  <option value="2">Perempuan</option>
                </Form.Select>
                <FormAll
                  label="Phone Number"
                  type="number"
                  placeholder="Phone Number"
                  className='mt-3'
                />
                <Form.Select aria-label="Default select example m-3">
                  <option>Gender</option>
                  <option value="1">Laki-Laki</option>
                  <option value="2">Perempuan</option>
                </Form.Select>
              </div>
            </form>
            <Button onClick={handleCloseRegist} className="btn-order btn-nav mt-3">
              Register
            </Button>
            <p className="mt-3">
              Already have an account ? Klik{" "}
              <span className="fw-bold" onClick={handleShow}>
                Here
              </span>
            </p>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default Navbars;
