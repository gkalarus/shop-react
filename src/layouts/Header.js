import React from 'react';
import '../styles/Header.css';
import Cart from '../components/Cart';


const Header = ({cart, handleDeleteFromCart}) => {
  return (  
    <div className="header">
      <h1>PickYourPhone</h1>
      <Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart} />
    </div>
  );
}
 

export default Header;