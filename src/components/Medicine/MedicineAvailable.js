import { useContext } from "react";
import { Table, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./MedicineAvailable.css";

const MedicineAvailable = () => {
  const cartCtx = useContext(CartContext);

  const buyMedicineHandler = (e) => {
    return cartCtx.removeMedicine(e.target.id);
  }

  return (
    <section className="container">
      <Table bordered hover responsive="sm" className="shadow">
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
          {cartCtx.medicines.map((medicine, index) => {
            const sNo = index + 1;
            return (
              <tr key={sNo}>
                <td>{sNo}</td>
                <td>{medicine.medicineName}</td>
                <td>{medicine.medicineDescription}</td>
                <td>{medicine.medicinePrice}</td>
                <td>{((medicine.medicineQuantityAvailable < 1) ? 'Out of stock' : medicine.medicineQuantityAvailable)}</td>
                <td>
                  <Button
                    type="submit"
                    id={medicine.medicineId}
                    className="fw-bold bg-body-secondary shadow-sm border-0 text-dark"
                    disabled={((medicine.medicineQuantityAvailable < 1) ? true : false)}
                    onClick={buyMedicineHandler}
                  >
                    Add to cart 
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </section>
  );
};

export default MedicineAvailable;
