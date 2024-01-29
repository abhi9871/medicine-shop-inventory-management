import { useEffect, useState, Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import { Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import "./Cart.css";

const CartModal = ({ onClose }) => {
  const cartCtx = useContext(CartContext);
  const [isMsgShown, setIsMsgShown] = useState(false);

  const deleteItemHandler = (e) => {
    const itemId = e.target.id;
    cartCtx.removeFromCart(itemId);
  };

  const addItemHandler = (e) => {
    const itemId = e.target.id;
    cartCtx.addToCart(itemId);
  };

  useEffect(() => {
    // Check if all items are removed
    setIsMsgShown(cartCtx.medicines.every((medicine) => medicine.medicineCartQuantity === 0));
  }, [cartCtx.medicines]);

  return (
    <Fragment>
      <div className="overlay" onClick={onClose}></div>
      <div className="container custom-card-container">
        <Card>
        {isMsgShown ? (
            <Card.Body className="text-center fw-bold">
              <p>
                Your cart is empty..😢
              </p>
            </Card.Body>
          ) : (
            <>
              {cartCtx.medicines.map(
                (medicine) =>
                medicine.medicineCartQuantity > 0 && (
                    <Card.Body
                      className="d-flex justify-content-between align-items-center"
                      key={medicine.medicineId}
                    >
                      <div className="d-flex flex-column">
                        <div className="fw-bold mb-2">{medicine.medicineName}</div>
                        <div>
                          <span className="fw-bold text-danger">
                            ${medicine.medicinePrice}
                          </span>
                          <span className="border rounded px-2 py-1 fw-bold ms-5">
                            x {medicine.medicineCartQuantity}
                          </span>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <Button
                          id={medicine.medicineId}
                          className="cart-btn m-1 bg-transparent border-none border-danger-subtle text-danger fw-bold"
                          onClick={deleteItemHandler}
                        >
                          -
                        </Button>
                        <Button
                          id={medicine.medicineId}
                          className="cart-btn ms-1 bg-transparent border-none border-danger-subtle text-danger fw-bold"
                          onClick={addItemHandler}
                          disabled={medicine.medicineQuantityAvailable < 1}
                        >
                          +
                        </Button>
                      </div>
                    </Card.Body>
                  )
              )}

              <Card.Footer className="d-block">
                <div className="d-flex justify-content-between">
                  <h5>Total Amount</h5>
                  <h5>${cartCtx.totalAmount.toFixed(2)}</h5>
                </div>
                <div className="d-inline-block float-end">
                  <Button
                    className="close-button rounded-pill px-4 fw-bold me-1 bg-transparent border-none border-danger-subtle text-danger"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button className="order-button rounded-pill border px-4 fw-bold ms-1">
                    Order
                  </Button>
                </div>
              </Card.Footer>
            </>
          )}
        </Card>
      </div>
    </Fragment>
  );
};

const Cart = ({ onClose }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <CartModal onClose={onClose} />,
        document.getElementById("cart-model")
      )}
    </Fragment>
  );
};

export default Cart;
