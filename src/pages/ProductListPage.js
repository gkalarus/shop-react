import React from 'react';
import '../styles/ProductListPage.css';
import Product from '../components/Product';

const ProductListPage = ({products, handleAddItem}) => {
  if(!products) {
    return <div>Loading...</div>
  } else {
    const items = products;
    const list = items.map(item => (
      <Product 
        key={item.id} 
        info={item} 
        handleAddItem={handleAddItem}
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