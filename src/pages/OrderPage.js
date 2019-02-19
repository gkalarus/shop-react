import React from 'react';
import Order from '../components/Order';

const OrderPage = ({cart}) => {
  console.log(cart);

  const orderList = cart.map((item, index) => (
    <Order key={index} details={item}/>
  ));

  let sum = 0;

  
  if(cart.length > 0) {
    cart.forEach(item => sum += ((item.price + item.colorPriceModifier + item.capacityPriceModifier) * item.quantity))


    console.log(sum)

  }
 

  return (  
    <div className="orderList">
      <ul>{orderList}</ul>
      <h3>total: ${sum.toFixed(2)}</h3>
    </div>
  );
}
 
export default OrderPage;