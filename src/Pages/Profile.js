import React from 'react'

import user from '../assets/user.svg'
import logoName from '../assets/logo-name.svg'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

function Profile() {
    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <h2>My Profile</h2>
                    <Row>
                        <Col>
                            <img alt='user' src={user} />
                            <Button className='btn-nav w-100 mt-3'>Edit Profile</Button>
                        </Col>
                        <Col>
                            <div>
                                <p>FullName</p>
                                <p className='profile-text'>Andi</p>
                            </div>
                            <div>
                                <p>Email</p>
                                <p className='profile-text'>andi@gmail.com</p>
                            </div>
                            <div>
                                <p>Phone</p>
                                <p className='profile-text'>082303289</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>History Transaction</h2>
                    <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title>Geprek bensu</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Saturday, 12 March 2021</Card.Subtitle>
                                    <Card.Text>Rp. 10.000</Card.Text>
                                </Col>
                                <Col className=' ms-5'>
                                    <Card.Img src={logoName} width='100px'/>
                                    <Button variant='success'>Finished</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default Profile    