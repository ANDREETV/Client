import React from 'react'
import FormLogin from '../components/FormLogin'
import { Col, Container, Row } from 'react-bootstrap'

export default function Login() {
    return (
        <Container>
            <Row className='d-flex flex-column align-items-center'>
                <Col className='my-5'>
                    <h1>Login</h1>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <FormLogin />
                </Col>
            </Row>
        </Container>
    )
}
