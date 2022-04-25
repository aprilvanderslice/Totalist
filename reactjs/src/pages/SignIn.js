import React, { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  submitButton: {
    float: 'right',
    margin: '3rem 0',
  },
  pageTitle: {
    fontWeight: '800',
    fontSize: '3.5rem',
    textAlign: 'left',
    marginBottom: '3rem',
  },
  wrapper: {
    width: '90%',
    marginBottom: '1rem',
  },
  loginHelp: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
  },
  link: {
    fontWeight: '600',
    width: 'fit-content',
    textDecoration: 'none',
    color: 'black',
    padding: '1rem',
  },
  buttonLink: {
    textDecoration: 'none',
    color: 'white',
  },
  errormsg: {
    backgroundColor: 'pink',
    color: 'red',
    fontWeight: 'bold',
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  offscreen: {
    display: 'none',
  },
  
};

function SignIn() {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        '/auth/login',
        { email, password },
      );
      let token = response?.data?.token;
      let user = response?.data?.user
      localStorage.setItem('storedToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      setAuth({ token, user })
      if (response.data.loggedIn) {
        navigate('/', {replace: false});
      } else {
        return;
      }
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Email or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Wrong email/password combination.');
      } else {
        setErrMsg('Login failed.');
      }
      
    }
  };

  return (
    <>
        <div style={styles.container}>
          <div style={styles.wrapper}>
            <p
              ref={errRef}
              style={errMsg ? styles.errormsg : styles.offscreen}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 style={styles.pageTitle}>Sign In</h1>
            <Form onSubmit={handleSubmit}>
              <div style={styles.form}>
                <FloatingLabel
                  htmlFor="emailInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    id="emailInput"
                    ref={userRef}
                    placeholder="name@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </FloatingLabel>
                <FloatingLabel
                  htmlFor="passwordInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    id="passwordInput"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </FloatingLabel>
              </div>

              <Button style={styles.submitButton} variant="dark" type="submit">
                <BsArrowRight size={30} />
              </Button>
            </Form>
          </div>
        </div>
    </>
  );
}

export default SignIn;
