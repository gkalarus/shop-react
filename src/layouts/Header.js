import React from 'react';
import '../styles/Header.css';
import Cart from '../components/Cart';
import { NavLink } from 'react-router-dom';



const Header = ({cart, handleDeleteFromCart, user}) => {
  return (  
    <div className="header">
      <h1>PickYourPhone</h1>
      <div className="headerRight">
        {user !== null ? <h3>Hello {user.name}</h3> : <NavLink to='/login'>Log in</NavLink>}
        <Cart cart={cart} handleDeleteFromCart={handleDeleteFromCart} />
      </div>
    </div>
  );
}
 

export default Header;