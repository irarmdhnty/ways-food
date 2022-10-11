import { useState } from "react";
import { Button, Container, Dropdown, Modal, Navbar } from "react-bootstrap"
import logo from '../assets/logo.svg'
import cart from '../assets/cart.svg'
import users from '../assets/users.svg'
import { useNavigate } from "react-router-dom";

function Navbars() {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/")
    };

    const handleNavigateToProfile = () => {
        navigate("/profile")
    };

    const handleNavigateToOrder = () => {
        navigate("/order")
    };

    const [isLogin, setIsLogin] = useState(false)

    //Login
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShowRegist(false);
        setShow(true);
    }

    //regist
    const [showRegist, setShowRegist] = useState(false);
    const handleCloseRegist = () => setShowRegist(false);
    const handleShowRegist = () => { 
        setShow(false);
        setShowRegist(true);
    }

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
                        {
                            !isLogin ? <div>
                                <Button variant="btn btn-nav text-white mx-3" onClick={handleShowRegist}>Register</Button>
                                <Button variant="btn btn-nav text-white" onClick={handleShow}>Login</Button>
                            </div> : <div>
                                    <Dropdown>
                                        <img src={cart} className='mx-3' onClick={handleNavigateToOrder} />
                                        <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                                            <img src={users} />
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={handleNavigateToProfile}>Profile</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                
                            </div>
                        }
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
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="email" />
                            </div>
                            <div class="m-3">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="password" />
                            </div>
                        </form>
                        <Button onClick={() => {
                            handleClose()
                            setIsLogin(true)
                        }} className='btn-order btn-nav px-5'>
                            Login
                        </Button>
                        <p className="mt-3">Don't have an account ? Klik <span className="fw-bold" onClick={handleShowRegist}>Here</span></p>
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
                            <div class="m-3">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div class="m-3">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="m-3">
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Full Name" />
                            </div>
                            <div class="m-3">
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Gender" />
                            </div>
                            <div class="m-3">
                                <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Phone" />
                            </div>
                            <div class="m-3">
                                <select id="disabledSelect" class="form-select">
                                    <option>As User</option>
                                </select>
                            </div>
                        </form>
                        <Button onClick={handleCloseRegist} className='btn-order btn-nav'>
                            Register
                        </Button>
                        <p className="mt-3">Already have an account ?  Klik <span className="fw-bold" onClick={handleShow}>Here</span></p>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}

export default Navbars
