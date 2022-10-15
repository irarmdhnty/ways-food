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
import foodIcon from '../assets/food-icon.svg'
import admin from '../assets/admin.svg'

function Navbars() {
  const navigate = useNavigate();

  const {isLogin, setIsLogin} = useContext(LoginContext);
  const { dataCart, setDataCart } = useContext(CartContext);

  const [userRole, setUserRole] = useState("");
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
            ) : userRole === 'user' ? (
              <div>
                <Dropdown>
                  <img
                    src={cart}
                    className="mx-3"
                    style={{ cursor: 'pointer' }}
                    onClick={() => navigate("/order")}
                  />
                  {dataCart.length > 0 && (
                    <Badge
                      style={{ width: "25px", height: "20px" }}
                      className="bg-danger position-absolute badge"
                    >
                      {dataCart.length}
                    </Badge>
                  )}
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
                        navigate("/")
                      }}
                    >
                      <img className="me-3" src={logoutIcon} />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            ): (
              <div>
                <Dropdown>
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={admin} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate('/profile-admin')}>
                      <img className="me-3" src={userIcon} />
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate('/add-product')}>
                      <img className="me-3" src={foodIcon} />
                      Add Product
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => {
                      setIsLogin(false);
                      navigate("/")
                    }}>
                    <img className="me-3" src={logoutIcon} />
                    Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Login
        show={showLogin}
        setShow={setShowLogin}
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        setShowRegister={setShowRegister}
        setUserRole={setUserRole}
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
