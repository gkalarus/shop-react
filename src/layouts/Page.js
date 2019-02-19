import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import OrderPage from '../pages/OrderPage';



import '../styles/Page.css';

const Page = (props) => {
  return (  
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" exact render={() => (
          <ProductListPage 
            products={props.products}  
            handleSendToCart={props.handleSendToCart}
          />
          )}/>
        <Route path="/login" exact component={LoginPage} /> 
        <Route path="/order" exact render={() => (
          <OrderPage cart={props.cart} />
        )} />
      </Switch>
  );
}
 
export default Page;