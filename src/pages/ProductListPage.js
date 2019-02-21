import React from 'react';
import Product from '../components/Product';

const ProductListPage = ({products, handleSendToCart}) => {
  if(!products) {
    return <div>Loading...</div>
  } else {
    const items = products;
    const list = items.map(item => (
      <Product 
        key={item.id} 
        info={item} 
        handleSendToCart={handleSendToCart}
      />
    ));
    return (
      <div className="products">
        <ul>{list}</ul>
      </div>
    )
  }

}
 
export default ProductListPage;