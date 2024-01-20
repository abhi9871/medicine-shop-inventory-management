import {Table, Button} from 'react-bootstrap';
import './MedicineAvailable.css';

const MedicineAvailable = () => {
  return (
    <section className='container'>
    <Table bordered hover responsive='sm' className='shadow'>
      <thead>
        <tr>
          <th>#</th>
          <th>Medicine Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Buy Medicine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Paracetamol</td>
          <td>Fever purpose</td>
          <td>10</td>
          <td>80</td>
          <td><Button type="submit" className='fw-bold bg-body-secondary shadow-sm border-0 text-dark'>Buy Medicine</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Dolo</td>
          <td>Fever Purpose</td>
          <td>12</td>
          <td>60</td>
          <td><Button type="submit" className='fw-bold bg-body-secondary shadow-sm border-0 text-dark'>Buy Medicine</Button></td>
        </tr>
        <tr>
          <td>3</td>
          <td>Saridon</td>
          <td>For Headache</td>
          <td>5</td>
          <td>50</td>
          <td><Button type="submit" className='fw-bold bg-body-secondary shadow-sm border-0 text-dark'>Buy Medicine</Button></td>
        </tr>
      </tbody>
    </Table>
    </section>
  );
}

export default MedicineAvailable;