import React from 'react';
import '../styles/Order.css'

const Order = ({details, handleDeleteFromCart, index}) => {
  return (  
    <li><span className="itemIndex">{index + 1}.&nbsp;</span> <span className="itemName">{details.name}&nbsp;</span><span className="itemColor">({details.colorValue})&nbsp;</span> <span className="itemCapacity">{details.capacityValue}&nbsp;</span>-&nbsp;<span className="itemQuantity">{details.quantity}&nbsp;</span><span className="itemTimes">x&nbsp;</span><span className="itemPrice">${details.price + details.colorPriceModifier + details.capacityPriceModifier}</span><button className="removeOrder" onClick={handleDeleteFromCart.bind(this, details.uuid)}></button></li>
  );
}
 
export default Order;