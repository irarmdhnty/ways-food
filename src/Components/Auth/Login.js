import React, { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import { LoginContext } from "../../Contexts/LoginContext";
import FormAll from "../Atoms/FormAll";

const Login = ({ show, setShow, setShowRegister }) => {
  const handleClose = () => setShow(false);

  const { isLogin, setIsLogin } = useContext(LoginContext);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <Form>
            <div className="text-yellow m-3">
              <h2>Login</h2>
            </div>
            <FormAll label="Email" type="email" placeholder="Email" />
            <FormAll label="Password" type="password" placeholder="Password" />
          </Form>
          <Button
            onClick={() => {
              setIsLogin(true);
              setShow(false);
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
