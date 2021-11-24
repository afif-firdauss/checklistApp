import React from 'react'
import {Col} from 'react-bootstrap'
import { useHistory } from "react-router";
import AuthService from '../../config/Services/auth.service'

export default function Login() {
  const route = useHistory();
  const [password, setPassword] = React.useState('')
  const [username, setUsername] = React.useState('')
  const [error, setError] = React.useState('')
  // console.log( password, username)

  const user = AuthService.getCurrentUser();

  React.useEffect(() => {
    if (user) {
      route.push('/');
    }
  }, [user, route]);

  const handleLogin = (e) => {
    e.preventDefault()
    if (password && username === '') {
      setError("field tidak boleh kosong");
    } else {
      AuthService.login(password, username)
        .then((response) => {
          // console.log(response, 'login')
          route.push("/");
        })
        .catch((err) => {
          setError(err.data.errorMessage);
          // console.log(err.errorMessage, 'error')
        });
    }
  };
  return (
    <main className="form-register" style={{marginTop: '150px'}}>
      <form className="container">
        <Col lg="6" className="mx-auto d-flex flex-column">
          <h1 className="h3 mb-3 fw-bold mb-3">Login</h1>

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
          {error && <p className="text-danger">{error}</p>}
          <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleLogin}>Login</button>
        </Col>
      </form>
    </main>
  )
}
