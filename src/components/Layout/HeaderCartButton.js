import { useContext } from "react";
import { ShoppingCart } from "react-feather";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import './HeaderCartButton.css';

const HeaderCartButton = ({showCartOnClick}) => {
    const cartCtx = useContext(CartContext);
    let numOfMedicines =  cartCtx.medicines.reduce((curr, medicine) => curr + medicine.medicineCartQuantity, 0);
    return (
        <Button className='flex shadow rounded-5 px-4 py-2 bg-body-tertiary fw-bold align-items-center border-0 cart-button m-2' onClick={showCartOnClick}>
            <ShoppingCart fill="black" className="text-dark" size={20} />
            <span className="ms-2 text-dark">Your Cart</span>
            <span className="badge rounded-5 px-2 ms-3 cart-count">{numOfMedicines}</span>
            </Button>
    )
}

export default HeaderCartButton;