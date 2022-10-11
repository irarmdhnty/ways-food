import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Food } from "../DataDummy/Food"

const Detail = () => {
    return (
        <Container>
            <h2 className="mt-5 mb-3">Geprek Bensu, Menus</h2>
            <Row>
                {Food.map((item, index) => (
                    <Col key={index} className='my-3 col-12 col-md-3'>
                        <Card style={{ width: '16rem' }} className='shadow'>
                            <Card.Img variant="top" src={item.image} />
                            <Card.Body>
                                <Card.Text className="font-bold">{item.name}</Card.Text>
                                <Card.Text className="text-price">{item.price}</Card.Text>
                                <Button className='bg-yellow btn-order'>Order</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Detail
