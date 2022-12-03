import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Cards from './Cards';
import Form from 'react-bootstrap/Form'
function ContactForm() {
  return (
    <Container>
      {/* <Row xs={1} md={2}>
        <Col><Card /></Col>
        <Col><Card /></Col>
        
      </Row> */}
     
      <p> </p>
        <Row>
        <Col>
          <Form.Label>Mobile Number</Form.Label>
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
          <Form.Label>Home Number</Form.Label>
        </Col>
        <Col>
          <Form.Control placeholder="" />
        </Col>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
          <p></p>
        </Row>
        <Row>
        <Col>
          <Form.Label>Office Number</Form.Label>
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
          <Form.Label>Fax Number</Form.Label>
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
          <Form.Label>Your Email Address</Form.Label>
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
    </Container>
  );
}

export default ContactForm;