import React, { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import { Link, useNavigate } from 'react-router-dom';
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
  link: {
    width: 'fit-content',
    textDecoration: 'none',
    color: 'red',
  },
  formFooter: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
  cancelLink: {
    textDecoration: 'none',
    color: 'red',
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

function RegistrationPage() {
  const { setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [validMatch, setValidMatch] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    setValidMatch(password === passwordMatch);
  }, [password, passwordMatch]);

  useEffect(() => {
    userRef.current.focus();
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!validMatch) {
      setErrMsg("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post(
        '/auth/register',
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      
        let token = response?.data?.token;
        let user = response?.data?.user;
        debugger
        console.log(user)
        localStorage.setItem('storedToken', token);
        localStorage.setItem('user', JSON.stringify(user));
        setAuth({ token, user });
        navigate('/', { replace: false });
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response.status === 422) {
        setErrMsg('Email already in use.');
      } else {
        setErrMsg('Unable to register. Please Try again. ');
      }
      errRef.current.focus();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <section>
          <p
            ref={errRef}
            style={errMsg ? styles.errormsg : styles.offscreen}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1 style={styles.pageTitle}>Register</h1>
          <Form onSubmit={handleSubmit}>
            <FloatingLabel
              label="First name"
              className="mb-3"
            >
              <Form.Control
              style={styles.input}
                type="text"
                ref={userRef}
                placeholder="Jane"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="Last name"
              className="mb-3"
            >
              <Form.Control
              style={styles.input}
                type="text"
                placeholder="Doe"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="Email address"
              className="mb-3"
            >
              <Form.Control
              style={styles.input}
                type="email"
                placeholder="name@example.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="Password"
              className="mb-3"
            >
              <Form.Control
              style={styles.input}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </FloatingLabel>
            <FloatingLabel
              label="Verify password"
              className="mb-3"
            >
              <Form.Control
              style={styles.input}
                type="password"
                id="passwordMatch"
                name="passwordMatch"
                placeholder="Verify password"
                onChange={(e) => setPasswordMatch(e.target.value)}
                value={passwordMatch}
                required
              />
              </FloatingLabel>
            <div style={styles.formFooter}>
              <Button style={styles.submitButton} variant="dark" type="submit">
                Submit
              </Button>
              <Button variant="link" style={styles.cancelLink}>
                <Link style={styles.cancelLink} to="/">
                  Cancel
                </Link>
              </Button>
            </div>
          </Form>
        </section>
      </div>
    </div>
  );
}

export default RegistrationPage;
