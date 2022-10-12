import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [isLogin, setIsLogin] = useState(false);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <form>
            <div className="text-yellow m-3">
              <h2>Login</h2>
            </div>
            <div class="m-3">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="email"
              />
            </div>
            <div class="m-3">
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="password"
              />
            </div>
          </form>
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
            <span className="fw-bold">Here</span>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
