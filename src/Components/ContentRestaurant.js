import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"
import { RestaurantNear } from '../DataDummy/RestaurantNear'
import { useContext, useState } from "react";
import { LoginContext } from "../Contexts/LoginContext";
import Login from "./Auth/Login";
import Register from "./Auth/Register";

function ContentRestaurant() {
    const navigate = useNavigate();

    const {isLogin, setIsLogin} = useContext(LoginContext)

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);


    return (
        <Container>
            <h2 className="mt-4">Restaurant Near You</h2>
            <Row>
                {RestaurantNear.map((item, index) => (
                    <Col key={index} className="my-3 col-12 col-md-3">
                        <Card width='18 rem' className="shadow" onClick={() => 
                            { !isLogin ? setShowLogin(true) : navigate('/detail')} 
                            }>
                            <Card.Body className="align-items-center">
                                <Card.Img src={item.image} />
                                <Card.Title className='mt-3'>{item.name}</Card.Title>
                                <Card.Text>{item.distance}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Login 
                    show={showLogin}
                    setShow={setShowLogin}
                    setShowRegister={setShowRegister}
                />
                <Register
                    show={showRegister}
                    setShow={setShowRegister}
                    setShowRegister={setShowLogin}
                />
            </Row>
        </Container>
    )
}

export default ContentRestaurant
