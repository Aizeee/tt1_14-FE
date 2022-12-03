import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import Cards from './Cards';
import Form from 'react-bootstrap/Form'
function AddressForm() {
  return (
    <Container>
      {/* <Row xs={1} md={2}>
        <Col><Card /></Col>
        <Col><Card /></Col>
        
      </Row> */}
     
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
    </Container>
  );
}

export default AddressForm;