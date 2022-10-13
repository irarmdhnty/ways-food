import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import patner from '../../assets/patner-img.svg'
import logoName from '../../assets/logo-name.svg'

function ProfileAdmin() {
    const navigate = useNavigate();

    const editProfile = () => {
        navigate("/edit-profile")
    };
    return (
        <Container>
            <Row className='mt-5'>
                <Col>
                    <h2 className='mb-5'>My Profile Patner</h2>
                    <Row>
                        <Col>
                            <img alt='user' src={patner}  width='200px'/>
                            <Button className='btn-nav w-75 mt-3' onClick={editProfile}>Edit Profile</Button>
                        </Col>
                        <Col>
                            <div className='mb-5'>
                                <p>FullName</p>
                                <p className='profile-text'>Andi</p>
                            </div>
                            <div className='mb-5'>
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
                    <h2 className='mb-5'>History Transaction</h2>
                    <Card style={{ width: '30rem' }} className='shadow'>
                        <Card.Body>
                            <Row>
                                <Col >
                                    <Card.Title>Geprek bensu</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Saturday, 12 March 2021</Card.Subtitle>
                                    <Card.Text>Rp. 10.000</Card.Text>
                                </Col>
                                <Col className=' ms-5 '>
                                    <Card.Img src={logoName} width='20px'/>
                                    <Button className='btn-finish fw-bold fs-5'>Finished</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}

export default ProfileAdmin    