import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { User } from "../../DataDummy/Users";

import FormAll from "../Atoms/FormAll";

const Login = ({
  show,
  setShow,
  setShowRegister,
  isLogin,
  setIsLogin,
  setUserRole,
}) => {
  const navigate = useNavigate()
  const handleClose = () => setShow(false);

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const [statusMessage, setStatusMessage] = useState("");

  function successLogin(email, password) {
    const emailCheck = User.filter((field) => field.email === email);

    if (emailCheck.length === 0) {
      setStatusMessage("Email belum terdaftar");
      return {
        status: false,
        message: statusMessage,
      };
    }

    const result = User.filter((field) => field.password === password);

    if (result.length === 0) {
      setStatusMessage("Password Anda Salah");
      return {
        status: false,
        message: statusMessage,
      };
    }
    setStatusMessage("Login success");
    return {
      status: true,
      message: statusMessage,
      user: result[0],
    };
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        {statusMessage != "" && 
          <p className={!isLogin ? 'text-danger' : 'text-success'}>{statusMessage}</p>
        }
          <Form>
            <div className="text-yellow m-3">
              <h2>Login</h2>
            </div>
            <FormAll
              label="Email"
              type="email"
              placeholder="Email"
              value={userLogin.email}
              onChange={(e) =>
                setUserLogin({ ...userLogin, email: e.target.value })
              }
            />
            <FormAll
              label="Password"
              type="password"
              placeholder="Password"
              value={userLogin.password}
              onChange={(e) =>
                setUserLogin({ ...userLogin, password: e.target.value })
              }
            />
          </Form>
          <Button
            onClick={() => {
              let hasLogin = successLogin(userLogin.email, userLogin.password);
              hasLogin.status && setIsLogin(true);
              hasLogin.status && setUserRole(hasLogin.user.role);
              hasLogin.status && setShow(false);
              hasLogin.status && setStatusMessage('')
              hasLogin.user.role == 'admin' && navigate('/home-admin')
            }}
            className="btn-order btn-nav px-5"
          >
            Login
          </Button>
          <p className="mt-3">
            Don't have an account ? click
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowRegister(true);
              }}
            >
              Here
            </span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
