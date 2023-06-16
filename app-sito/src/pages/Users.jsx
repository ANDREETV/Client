import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import jwt_decode from "jwt-decode";



export default function Users() {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let userLogin = localStorage.getItem('userLogin')
    if (!userLogin) {
      navigate('/login')
    } else {
      var decoded = jwt_decode(userLogin);
      setUser(decoded)
    }
    // console.log(decoded);
  }, []);

  return (
    <Container>
      <h1>Users</h1>
      <h2>Solo per persone loggate!!</h2>
  {user ? <h3>{user.name}{user.lastname}</h3> : ''}
    </Container>
  )
}
