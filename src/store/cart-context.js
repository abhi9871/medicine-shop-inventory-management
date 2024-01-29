import React from 'react';

const CartContext = React.createContext({
    medicines: [],
    totalAmount: 0,
    addMedicine: () => {},
    removeMedicine: () => {},
    addToCart: () => {},
    removeFromCart: () => {}
})

export default CartContext;