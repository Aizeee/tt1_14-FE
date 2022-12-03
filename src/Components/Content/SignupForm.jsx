import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  let response;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: signUpData } = await axios.post(
        "https://tradewise-demo.herokuapp.com/auth/signup",
        {
          email,
          password,
        }
      );
      response = signUpData;
    } catch (error) {
      console.log(error.message);
    }

    // If response has errors, update Error State
    if (response.errors.length) {
      setError(response.errors[0].msg);
    }
  };

  return (
    <>
      <Container style={{ paddingTop: "1rem" }}>
        <h1>DIGI Signup</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm></Col>
            <Col sm>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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
