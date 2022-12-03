import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Cards from './Cards';
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from 'react'

const mockuserdata = 
  {
  "UserID": 1,
  "Username": "ExecutiveDBS",
  "Password": "DBSBestBank2022",
  "Firstname": "Tom",
  "Lastname": "Lim",
  "Email": "TomLim@easymail.com",
  "Address": "Block 123 Serangoon Garden #10-129",
  "OptIntoPhyStatements": 0
  }
  
  const ContactForm = () => {
    const [userdata, setuserdata] = useState([]);
    // const [address, setAddress] = useState([]);
    useEffect(() => {
        setuserdata(mockuserdata)
        console.log(userdata);
      }, [setuserdata]);
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
          <Form.Control placeholder={userdata.Email} />
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
          <Form.Control placeholder={userdata.Address} />
        </Col>
        </Row>
    </Container>
  );
}

export default ContactForm;