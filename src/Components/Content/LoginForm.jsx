import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserAuth } from "../../Context/AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = UserAuth();
  const navigate = useNavigate();

  let response;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post("http://13.112.160.104:4001/v1/login", {
        Username: username,
        Password: password,
      });

      if (data.data) {
        response = data.data;
      }
      //   ExecutiveDBS
      // DBSBestBank2022
    } catch (error) {
      setError(error.response.data.error);
    }
    // Set User Auth State on successful login/signup
    setUser({
      data: response.data,
      loading: false,
      error: null,
    });

    // Storing JWT in the browser Local Storage
    localStorage.setItem("token", response.data.token);
    // Update axios header with the token, so user is authenticated across all protected routes
    axios.defaults.headers.common[
      "authorization"
    ] = `Bearer ${response.data.token}`;

    // Navigate user on login success
    navigate("/");
  };

  return (
    <>
      <Container style={{ paddingTop: "1rem" }}>
        <h1>DIGI Login</h1>
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
                Log In
              </Button>
            </Col>
            <Row>
              <Form.Text>
                Don't have an account? <Link to="/signup">Sign up</Link>
              </Form.Text>
            </Row>
            <Col sm></Col>
          </Row>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
