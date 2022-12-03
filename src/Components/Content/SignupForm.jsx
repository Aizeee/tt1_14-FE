import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../Context/AuthContext";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = UserAuth();
  const navigate = useNavigate();

  let response;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data: signUpData } = await axios.post(
        "http://13.112.160.104:4001/v1/addUser",
        {
          username: username,
          password: password,
        }
      );
      response = signUpData;
    } catch (error) {
      console.log(error.message);
    }

    // MOCK DATA - DELETE THIS LATER
    response = {
      data: {
        token: "abc",
      },
      error: null,
    };

    // If response has errors, update Error State
    if (response.error) {
      return setError(response.error);
    }

    // Set User Auth State on successful login/signup
    // TODO: Update token to response.data.token
    setUser({
      data: {
        token: response.data.token,
      },
      loading: false,
      error: null,
    });

    // Storing JWT in the browser Local Storage
    localStorage.setItem("token", response.data.token);
    // Update axios header with the token, so user is authenticated across all protected routes
    axios.defaults.headers.common[
      "authorization"
    ] = `Bearer ${response.data.token}`;

    // Navigate user on login/signup success
    navigate("/");
  };

  return (
    <>
      <Container style={{ paddingTop: "1rem" }}>
        <h1>DIGI Signup</h1>
        {error && <div>{error}</div>}
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm></Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Enter username"
                  name="username"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Col>
            <Col sm></Col>
          </Row>
          <Row>
            <Col sm></Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col sm></Col>
          </Row>
          <Row>
            <Col sm></Col>
            <Col sm>
              <Button variant="danger" type="submit">
                Sign up
              </Button>
            </Col>
            <Row>
              <Form.Text>
                Already have an account? <Link to="/login">Login</Link>
              </Form.Text>
            </Row>
            <Col sm></Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default SignupForm;
