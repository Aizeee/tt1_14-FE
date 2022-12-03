import React, { useState, useEffect } from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from '../Components/Content/contactdetailform'
import UserDetails from '../Components/Content/UserDetails'
// const [editForm] = useState(false);

const Extra = () => {

  const [editForm, setEditForm] = useState(false);
  console.log(editForm)
  const toggleForm = () => {
    setEditForm(current => !current);
  }


  
  return (
    <div>
      <NavBar1 />
      
      <h1>Update Personal and Contact Details</h1>
      <p>Please ensure that the details below are correct and click "Submit" to complete this transaction.</p>
     
      <Form onSubmit>
      <h3>Update of Personal Particulars</h3>
      <p> </p>
      <p> </p>

      {
        editForm === true ? <ContactForm/> : <UserDetails/>
      }
      
    <Row>
    <p> </p>
      <p> </p>
    
    {
        editForm === false ? "" : <Col>
    
        <Button variant="primary" type="submit" onClick={toggleForm}>
            Cancel
          </Button>
        </Col>
      }
    {
        editForm === true ? "" : <Col>
    
        <Button variant="primary" type="submit" onClick={toggleForm}>
            Ammend
          </Button>
        </Col>
      }
    {
        editForm === false ? "" : <Col>
    
        <Button variant="primary" type="submit" onClick={toggleForm}>
            Submit
          </Button>
        </Col>
      }
   
    </Row>

    </Form>
    </div>
  )
}

export default Extra