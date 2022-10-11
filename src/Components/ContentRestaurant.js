import { useNavigate } from "react-router-dom"
import { Card, Col, Container, Row } from "react-bootstrap"
import { RestaurantNear } from '../DataDummy/RestaurantNear'

function ContentRestaurant() {

    const navigate = useNavigate();

    const handleNavigateToDetail = () => {
        navigate("/detail")
    };
    return (
        <Container>
            <h2 className="mt-4">Restaurant Near You</h2>
            <Row>
                {RestaurantNear.map((item, index) => (
                    <Col key={index} className="my-3 col-12 col-md-3">
                        <Card width='18 rem' className="shadow">
                            <Card.Body className="align-items-center">
                                <Card.Img src={item.image} />
                                <Card.Title onClick={handleNavigateToDetail} className='mt-3'>{item.name}</Card.Title>
                                <Card.Text>{item.distance}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ContentRestaurant
