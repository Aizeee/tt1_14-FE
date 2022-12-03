import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Cards from './Cards';
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from 'react'



const ContactForm = (props) => {

  return (
    <Container>
      <p> </p>
      <Row>
        <p></p>
      </Row>
      <Row>
        <Col>
          <Form.Label>Your Email Address</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder={props.userData.Email} />
        </Col>
      </Row>
      <Row>
        <p></p>
      </Row>
      <Row>
        <Col>
          <Form.Label>Address</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder={props.userData.Address} />
        </Col>
      </Row>
    </Container>
  );
}

export default ContactForm;