import {useState} from 'react';
import Header from './components/Layout/Header';
import Medicine from './components/Medicine/Medicine';
import CartProvider from '../src/store/CartProvider';
import Cart from './components/Cart/Cart';
import './App.css';

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => setShowCart(true);;

  const hideCartHandler = () => setShowCart(false);

  return (
    <CartProvider>
      {showCart && <Cart onClose = {hideCartHandler} />}
      <Header onShow = {showCartHandler} />
      <Medicine />
    </CartProvider>
  );
}

export default App;
