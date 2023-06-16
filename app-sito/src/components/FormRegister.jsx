import React, { useState} from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function FormRegister() {
    const [User, setUser] = useState({});
    const navigate = useNavigate();
    const formHandler = (e) => {
        // console.log(e.target.name);
        setUser({
            ...User,
            [e.target.name]: e.target.value
        })
        // console.log(User);
    }

    const formSubmittedHandler = () => {
        axios.post(`/register`, User)
            .then((response) => {
                navigate('/login');
            })
            .catch(err => console.error(err))
            console.log(User);
    }

    return (
        <>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLastName">
                    <Form.Control
                        type="text"
                        placeholder="Enter lastname"
                        name="lastname"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCity">
                    <Form.Control
                        type="text"
                        placeholder="Enter city"
                        name="city"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicimg">
                    <Form.Control
                        type="file"
                        placeholder="Enter img"
                        name="img"
                        onChange={formHandler}
                    />
                </Form.Group>
                <Button variant="dark" onClick={formSubmittedHandler}>
                    Submit
                </Button>
            </Form>
        </>
    )
}
