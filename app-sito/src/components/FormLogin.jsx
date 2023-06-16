import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form,Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const baseUrl= process.env.BASEURL;

export default function FormLogin() {
    const [User, setUser] = useState({})
    const [Error,setrror] = useState(null)
    const navigate = useNavigate()
    const formHandler = (e) => {
        // console.log(e.target.name);
        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
        console.log(User);
    }

    const formSubmittedHandler = (e) => {
        axios.post(`/login`, User)
            .then(response => {
            localStorage.setItem('userLogin', response.data)
            navigate("/users")
            })
            .catch(err => setrror(err.response.data))
    }

    const logWithFacebook = () => {
        axios.get(`/fblogin`, User)
        .then(response => {
            console.log(response);
        })
        .catch(err => setrror(err.response.data))
    }

    return (
        <>
            <Form className='w-'>
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{ width: '320px' }}>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword" style={{ width: '320px' }}>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={formHandler}
                    />
                </Form.Group>
                {Error  ?  <Alert key={'danger'} variant={'danger'}>
                    {Error.error}
                </Alert> : ''}
                <Button variant="dark" onClick={formSubmittedHandler}>
                    Login
                </Button>
                <Button variant="dark" onClick={logWithFacebook}>
                FaceBook Login
                </Button>
            </Form>
        </>
    )
}
