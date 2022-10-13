import { useContext, useState } from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Modal,
  Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../Contexts/LoginContext";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

import logo from "../assets/logo.svg";
import userIcon from '../assets/user-icon.svg'
import logoutIcon from '../assets/logout-icon.svg'
import foodIcon from '../assets/food-icon.svg'
import admin from '../assets/admin.svg'

function NavbarsAdmin() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div>
      <Navbar className="bg-yellow" expand="lg">
        <Container className="d-flex ">
          <Link to="/" style={{ textDecoration: 'none' }}>
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
          <Navbar.Toggle aria-controls="sAdmincroll" />
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
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={admin} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/profile')}>
                      <img className="me-3" src={userIcon} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/profile')}>
                      <img className="me-3" src={foodIcon} />
                      Add Product
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                      setIsLogin(false);
                    }}>
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

export default NavbarsAdmin;
