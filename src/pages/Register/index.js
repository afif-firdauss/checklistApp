import React from 'react'
import {Col} from 'react-bootstrap'
import { useHistory } from "react-router";
import AuthService from '../../config/Services/auth.service'

export default function Register() {
  const route = useHistory();
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState('')
  // console.log(email, password, username)

  const handleRegister = (e) => {
    e.preventDefault()
    if (email && password && username === '') {
      setError("field tidak boleh kosong");
    } else {
      AuthService.register(email, password, username)
        .then((response) => {
          // console.log(response, 'register')
          route.push("/login");
        })
        .catch((err) => {
          setError(err.data.errorMessage);
        });
    }
  };

  return (
    <main className="form-register" style={{marginTop: '150px'}}>
      <form className="container">
        <Col lg="6" className="mx-auto d-flex flex-column">
          <h1 className="h3 mb-3 fw-bold mb-3">Register</h1>

          <div className="form-floating mb-3 mt-3">
            <input 
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input 
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input 
              type="text"
              className="form-control"
              id="floatingUsername"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label for="floatingUsername">username</label>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleRegister}>Send</button>
        </Col>
      </form>
    </main>
  )
}
