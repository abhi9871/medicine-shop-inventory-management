import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const MedicineForm = () => {

  return (
    <section className='container mb-4'>
    <Form className='container bg-body-secondary shadow rounded-5 py-3'>
      <Row className="g-3 mb-3 fw-bold justify-content-center">
        <Form.Group as={Col} md="5">
          <Form.Label>Medicine Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter medicine name"
          />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter description"
          />
        </Form.Group>
      </Row>
      <Row className="g-3 mb-3 fw-bold justify-content-center">
        <Form.Group as={Col} md="5">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" required />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Quantity Available</Form.Label>
          <Form.Control type="text" placeholder="Quantity Available" required />
        </Form.Group>
      </Row>
      <Form.Group className='d-flex justify-content-center mt-4'>
      <Button type="submit" className='fw-bold bg-body-tertiary border-0 text-dark'>Add Product</Button>
      </Form.Group>
    </Form>
    </section>
  );
}

export default MedicineForm;