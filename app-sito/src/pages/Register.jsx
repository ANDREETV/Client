import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormRegister from '../components/FormRegister'
export default function Register() {
    return (
        <Container  >
            <Row className='d-flex flex-column '>
                <Col className='my-5'>
                    <h1>Register</h1>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <FormRegister />
                </Col>
            </Row>
        </Container>
    )
}
