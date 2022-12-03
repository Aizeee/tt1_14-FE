import React, { useState, useEffect } from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ContactForm from '../Components/Content/contactdetailform'
import UserDetails from '../Components/Content/UserDetails'
// const [editForm] = useState(false);
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

const Extra = () => {
  const onSubmit = () => {
    
    throw new Error("Something is wrong");
  };
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData({Email: mockuserdata.Email, Address: mockuserdata.Address})
      console.log(userData);
    }, [userData]);
  
  const [editForm, setEditForm] = useState(false);
  const [updatedData, setUpdatedData] = useState({ email: userData.Email, address: userData.Address });

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
          editForm === true ? <ContactForm userData={userData} /> : <UserDetails userData={userData}/>
        }

        <Row>
          <p> </p>
          <p> </p>

          {
            editForm === false ? "" : <Col>

              <Button variant="secondary" type="cancel" onClick={toggleForm}>
                Cancel
              </Button>
            </Col>
          }
          {
            editForm === true ? "" : <Col>

              <Button variant="danger" type="danger" onClick={toggleForm}>
                Amend
              </Button>
            </Col>
          }
          {
            editForm === false ? "" : <Col>

              <Button variant="danger" type="submit" onClick={onSubmit}>
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