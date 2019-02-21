import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductListPage from '../pages/ProductListPage';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import OrderPage from '../pages/OrderPage';



import '../styles/Page.css';

const Page = (props) => {
  return (  
      <Switch>
        <Route path="/" exact render={() => (
          <HomePage 
            homeClass='homeClass'
          />
        )} />
        <Route path="/shop" exact render={() => (
          <ProductListPage 
            products={props.products}  
            handleSendToCart={props.handleSendToCart}
          />
          )}/>
        <Route path="/login" exact component={() => (
          <LoginPage 
            handleGetUserData={props.handleGetUserData}
          />
        )} /> 
        <Route path="/logout" exact component={() => (
          <LogoutPage 
            user={props.user}
            handleLogOut={props.handleLogOut}
          />
        )} /> 
        <Route path="/order" exact render={() => (
          <OrderPage 
            cart={props.cart} 
            handleDeleteFromCart={props.handleDeleteFromCart}
            orderClass='mainOrder'
          />
        )} />
      </Switch>
  );
}
 
export default Page;