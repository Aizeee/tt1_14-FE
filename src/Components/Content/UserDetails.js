import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Cards from './Cards';
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'


const UserDetails = (props) => {
    // const [userdata, setuserdata] = useState([]);
    // // const [address, setAddress] = useState([]);
    // useEffect(() => {
    //     setuserdata(mockuserdata)
    //     console.log(userdata);
    //   }, [setuserdata]);
    //   useEffect(() => {
    //     setAddress(userdata)
    //   }, [address]);
    
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
          {/* <Form.Control placeholder="" /> */}
          <Form.Label>{props.userData.Email}</Form.Label>
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
          {/* <Form.Control placeholder="" /> */}
          <Form.Label>{props.userData.Address}</Form.Label>
        </Col>
        
        </Row>
       
    </Container>
  );
}

export default UserDetails;