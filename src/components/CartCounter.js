import React from 'react';
import '../styles/CartCounter.css'


const CartCounter = ({cart}) => {
  let itemsInCart = cart.length;
  return (  
    <div className="cartCounter">
      {itemsInCart}
    </div>
  );
}
 
export default CartCounter;