import React from 'react';

const Order = ({details, handleDeleteFromCart}) => {
  return (  
    <li><span>{details.name}</span> <span>({details.colorValue})</span> <span>{details.capacityValue}</span> - {details.quantity}x ${details.price + details.colorPriceModifier + details.capacityPriceModifier} <button onClick={handleDeleteFromCart.bind(this, details.uuid)}>Delete</button></li>
  );
}
 
export default Order;