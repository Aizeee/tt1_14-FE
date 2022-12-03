import React, { useState, useEffect } from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import AddressForm from '../Components/Content/addressForm'
// import CountrySelect from 'react-bootstrap-country-select';

// const [checked, setChecked] = useState(false);

const Extra = () => {
  // const handleClick = () => {state : }


  // }
  
  return (
    <div>
      <NavBar1 />
      
      <h1>Update Personal and Contact Details</h1>
      <p>Please ensure that the details below are correct and click "Submit" to complete this transaction.</p>
     
      <Form>
      <h3>My Residential Address</h3>
      <p> </p>
      <p> </p>
      {/* <AddressForm/> */}
              <h3>My Mailing Address</h3>
      <p> </p>
      <Row>

      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox" >
        <Form.Check type="checkbox" label="My Mailing Address is the same as my residential address" defaultChecked = {true}/>
      </Form.Group>
      {/* <AddressForm/> */}
    <Row>
    <p> </p>
      <p> </p>
    <Col>
    <Button variant="primary" type="submit">
        cancel
      </Button>
    </Col>
    <Col>
    <Button variant="primary" type="submit">
        Ammend
      </Button>
    </Col>
    <Col>
    <Button variant="primary" type="submit">
        Submit
      </Button>
    </Col>
    </Row>

    </Form>
    </div>
  )
}

export default Extra

