import { useContext, useState } from "react";
import {
  Badge,
  Button,
  Container,
  Dropdown,
  Form,
  Modal,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { LoginContext } from "../Contexts/LoginContext";
import { CartContext } from "../Contexts/CartContext";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import users from "../assets/users.svg";
import userIcon from "../assets/user-icon.svg";
import logoutIcon from "../assets/logout-icon.svg";

function Navbars() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);
  const {dataCart, setDataCart} = useContext(CartContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container className="d-flex ">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand>WaysFood</Navbar.Brand>
            <Navbar.Brand>
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            {!isLogin ? (
              <div>
                <Button
                  variant="btn btn-nav text-white mx-3"
                  onClick={() => setShowRegister(true)}
                >
                  Register
                </Button>
                <Button
                  variant="btn btn-nav text-white"
                  onClick={() => setShowLogin(true)}
                >
                  Login
                </Button>
              </div>
            ) : (
              <div>
                <Dropdown>
                  <img
                    src={cart}
                    className="mx-3"
                    onClick={() => navigate("/order")}
                  />
                  <Badge
                    style={{ width: "25px", height: "20px" }}
                    className="bg-danger position-absolute badge"
                  >
                    {dataCart.length}
                  </Badge>
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={users} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profile")}>
                      <img className="me-3" src={userIcon} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        setIsLogin(false);
                      }}
                    >
                      <img className="me-3" src={logoutIcon} />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        show={showLogin}
        setShow={setShowLogin}
        setShowRegister={setShowRegister}
      />
      <Register
        show={showRegister}
        setShow={setShowRegister}
        setShowLogin={setShowLogin}
      />
    </div>
  );
}

export default Navbars;
