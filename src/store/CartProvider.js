import {useState} from 'react';
import CartContext from "./cart-context";

const CartProviderContext = (props) => {
    const [medicines, setMedicines] = useState([]);

    const addMedicineHandler = (item) => {
        setMedicines((prevItems) => {
            const existingItemIndex = prevItems.findIndex((medicine) => medicine.medicineName === item.medicineName);
            if(existingItemIndex === -1){
               return [...prevItems, item];
            } else {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].medicineQuantityAvailable += item.medicineQuantityAvailable;
                return updatedItems;
            }
        });
    }

    const removeMedicineHandler = (id) => {
        setMedicines((prevItems) => { 
            const existingItemIndex = prevItems.findIndex((medicine) => medicine.medicineId === id);
            const updatedItems = [...prevItems];
            const totalMedicineQuantity = updatedItems[existingItemIndex].medicineQuantityAvailable;
            updatedItems[existingItemIndex].medicineQuantityAvailable -= 1;
            updatedItems[existingItemIndex].medicineCartQuantity += totalMedicineQuantity - updatedItems[existingItemIndex].medicineQuantityAvailable;
            return updatedItems;
        })
    }

    const addToCartHandler = (id) => {
        setMedicines((prevItems) => {
            const existingItemIndex = prevItems.findIndex((medicine) => medicine.medicineId === id);
            const updatedItems = [...prevItems];
            const totalMedicineQuantity = updatedItems[existingItemIndex].medicineQuantityAvailable;
            updatedItems[existingItemIndex].medicineQuantityAvailable -= 1;
            updatedItems[existingItemIndex].medicineCartQuantity += totalMedicineQuantity - updatedItems[existingItemIndex].medicineQuantityAvailable;
            return updatedItems;

        });
    }

    const removeFromCartHandler = (id) => {
        setMedicines((prevItems) => {
            const existingItemIndex = prevItems.findIndex((medicine) => medicine.medicineId === id);
            const updatedItems = [...prevItems];
            updatedItems[existingItemIndex].medicineQuantityAvailable += 1;
            updatedItems[existingItemIndex].medicineCartQuantity -= 1;
            return updatedItems;

        });
    }

    const totalAmountHandler = (medicines) => {
        if (medicines.length === 0) {
            return 0; // Return 0 if the medicines array is empty
        }
        const totalAmount = medicines.reduce((curr, medicine) => curr + (medicine.medicinePrice * medicine.medicineCartQuantity), 0);
        return totalAmount;
    }

    const cartContext = {
        medicines: medicines,
        totalAmount: totalAmountHandler(medicines),
        addMedicine: addMedicineHandler,
        removeMedicine: removeMedicineHandler,
        addToCart: addToCartHandler,
        removeFromCart: removeFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProviderContext;