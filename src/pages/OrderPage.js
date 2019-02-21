import React from 'react';
import Order from '../components/Order';
import { NavLink } from 'react-router-dom';
import '../styles/OrderPage.css';


const OrderPage = ({cart, handleDeleteFromCart, orderClass, active, user, handleOrder, success}) => {

  const orderList = cart.map((item, index) => (
    <Order 
      key={index} 
      index={index} 
      details={item} 
      handleDeleteFromCart={handleDeleteFromCart}
    />
  ));

  let sum = 0;
  

  if(cart.length > 0) {
    cart.forEach(item => sum += ((item.price + item.colorPriceModifier + item.capacityPriceModifier) * item.quantity))
  }
 


  return (  
    <div className={`${orderClass} ${active === true ? 'subActive' : ''}`}>
      {cart.length === 0 && <h3 className="headerInfo">Place your product in the shopping cart...</h3>}
      {cart.length > 0 && <ul>{orderList}</ul>}
      {cart.length > 0 && <h3>total: ${sum.toFixed(2)}</h3>}
      {(cart.length > 0 && user !== null) && <button className="orderButton" onClick={handleOrder}><span>Place an order</span></button>}
      {(cart.length > 0 && user === null) && <p className="loginInfo">To place an order you need to <NavLink to='/login'>log in</NavLink> to your account</p>}
      {success && <div className="successMsg"></div>}
    </div>
  );
}
 
export default OrderPage;