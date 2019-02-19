import React from 'react';

const Order = ({details}) => {
  return (  
    <li><span>{details.name}</span> <span>({details.colorValue})</span> <span>{details.capacityValue}</span> - {details.quantity}x ${details.price + details.colorPriceModifier + details.capacityPriceModifier}</li>
  );
}
 
export default Order;