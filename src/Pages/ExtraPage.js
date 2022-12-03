import React from 'react'
import NavBar1 from '../Components/NavBars/NavBar1'
// import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'

// const [checked, setChecked] = useState(false);

const Extra = () => {
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
        <Row>
        <Col>
          <Form.Label>Postal Code</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Block No.</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Unit No.</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        <Col>
          <Form.Label>-</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Street Name</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        {/* country --> drop down; postal code */}
        <h3>My Mailing Address</h3>
      <p> </p>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="My Mailing Address is the same as my residential address" />
      </Form.Group>
      <p> </p>
        <Row>
        <Col>
          <Form.Label>Postal Code</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Block No.</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Unit No.</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        <Col>
          <Form.Label>-</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Street Name</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
    
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </div>
  )
}

export default Extra

