import React, { Component } from 'react';
import '../styles/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';


class App extends Component {

  state = {
    products: null,
    cart: [],
    user: null,

  }

  
  componentDidMount() {
    fetch('data/products.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        products: data
      })
    })
  }


  handleSendToCart = (product, uuid) => {

    const tempCart = this.state.cart;
    let targetProduct = product;
    targetProduct.uuid = uuid;
    tempCart.push(targetProduct)
    this.setState({
      cart: tempCart
    })
    
  };

  handleDeleteFromCart = id => {
    let cart = this.state.cart;
    let newCart = cart.filter(obj => obj.uuid !== id);
    this.setState({
      cart: newCart
    })

  }

  handleGetUserData = (userData) => {
    let user = {
      name: userData.firstName,
      surname: userData.lastName,
      email: userData.email,
      address: {
        street: userData.street,
        houseNumber: userData.houseNumber,
        city: userData.city,
        postcode: userData.postCode
      }
    }
    this.setState({
      user
    })
  }

  handleLogOut = () => {
    this.setState({
      user: null
    })
  }

  render() {

    return (
      
      <Router>
        <div className="app">
          <header>
            <Header 
              cart={this.state.cart} 
              handleDeleteFromCart={this.handleDeleteFromCart}
              user={this.state.user}
            />
          </header>
          <main>
            <aside>
              <Navigation 
                user={this.state.user}
              />
            </aside>
            <section className="page">
              <Page 
                products={this.state.products} 
                handleSendToCart={this.handleSendToCart}
                cart={this.state.cart}
                handleDeleteFromCart={this.handleDeleteFromCart}
                handleGetUserData={this.handleGetUserData}
                user={this.state.user}
                handleLogOut={this.handleLogOut}
              />
            </section>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
