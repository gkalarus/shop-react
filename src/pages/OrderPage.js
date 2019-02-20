import React from 'react';
import Order from '../components/Order';
import '../styles/OrderPage.css';


const OrderPage = ({cart, handleDeleteFromCart, orderClass, active}) => {
  const orderList = cart.map((item, index) => (
    <Order key={index} details={item} handleDeleteFromCart={handleDeleteFromCart}/>
  ));

  let sum = 0;
  

  if(cart.length > 0) {
    cart.forEach(item => sum += ((item.price + item.colorPriceModifier + item.capacityPriceModifier) * item.quantity))
  }
 


  return (  
    <div className={`${orderClass} ${active === true ? 'subActive' : ''}`}>
      <ul>{orderList}</ul>
      <h3>total: ${sum.toFixed(2)}</h3>
    </div>
  );
}
 
export default OrderPage;