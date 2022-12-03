import React, { useState, useEffect } from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import AddressForm from '../Components/Content/addressForm'
// import CountrySelect from 'react-bootstrap-country-select';

// const [checked, setChecked] = useState(false);

const Extra = () => {

  // const handleClick = (accountId) => {
  //   } }

  // }
  
  return (
    <div>
      <NavBar1 />
      
      <h1>Update Mailing Address</h1>
      <p>some text abc</p>
      <p>some text cde</p>
     
      <Form>
      <h3>My Residential Address</h3>
      <p> </p>
      <p> </p>
      <AddressForm/>
       
        {/* country --> drop down; postal code */}
        <h3>My Mailing Address</h3>
      <p> </p>
      <Row>

      </Row>
      <Form.Group className="mb-3" id="formGridCheckbox" >
        <Form.Check type="checkbox" label="My Mailing Address is the same as my residential address" defaultChecked = {false}/>
      </Form.Group>
      <AddressForm/>
    
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </div>
  )
}

export default Extra

