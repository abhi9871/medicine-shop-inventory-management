import { useState, useContext } from 'react';
import {Button, Col, Row, Form} from 'react-bootstrap';
import CartContext from '../../store/cart-context';

const MedicineForm = () => {

  const cartCtx = useContext(CartContext);

  const [enteredMedicineName, setMedicineName] = useState('');
  const [enteredMedicineDescription, setMedicineDescription] = useState('');
  const [enteredMedicinePrice, setMedicinePrice] = useState('');
  const [enteredMedicineQuantityAvailable, setMedicineQuantityAvailable] = useState('');

  const medicineNameHandler = (e) => {
      setMedicineName(e.target.value);
      const medicine = cartCtx.medicines.filter((medicine) => medicine.medicineName === e.target.value);
      if(medicine[0]){
        setMedicineDescription(medicine[0].medicineDescription);
        setMedicinePrice(medicine[0].medicinePrice);
        setMedicineQuantityAvailable(medicine[0].medicineQuantityAvailable);
      } else {
        setMedicineDescription('');
        setMedicinePrice('');
        setMedicineQuantityAvailable('');
      }
  }

  const medicineDescriptionHandler = (e) => {
    setMedicineDescription(e.target.value);
  }

  const medicinePriceHandler = (e) => {
    setMedicinePrice(e.target.value);
  }

  const medicineQuantityHandler = (e) => {
    setMedicineQuantityAvailable(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const medicineObj = {
      medicineId : Math.random().toFixed(2),
      medicineName: enteredMedicineName,
      medicineDescription: enteredMedicineDescription,
      medicinePrice: +enteredMedicinePrice,
      medicineQuantityAvailable: +enteredMedicineQuantityAvailable,
      medicineCartQuantity: 0
    }
    cartCtx.addMedicine(medicineObj);
    setMedicineName('');
    setMedicineDescription('');
    setMedicinePrice('');
    setMedicineQuantityAvailable('');
  }

  return (
    <section className='container mb-4'>
    <Form className='container bg-body-secondary shadow rounded-5 py-3' onSubmit={submitHandler}>
      <Row className="g-3 mb-3 fw-bold justify-content-center">
        <Form.Group as={Col} md="5">
          <Form.Label>Medicine Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter medicine name"
            value={enteredMedicineName}
            onChange={medicineNameHandler}
          />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter description"
            value={enteredMedicineDescription}
            onChange={medicineDescriptionHandler}
          />
        </Form.Group>
      </Row>
      <Row className="g-3 mb-3 fw-bold justify-content-center">
        <Form.Group as={Col} md="5">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter Price" value={enteredMedicinePrice} onChange={medicinePriceHandler} required />
        </Form.Group>
        <Form.Group as={Col} md="5">
          <Form.Label>Quantity Available</Form.Label>
          <Form.Control type="text" placeholder="Quantity Available" value={enteredMedicineQuantityAvailable} onChange={medicineQuantityHandler} required />
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