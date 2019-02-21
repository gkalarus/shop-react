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
    success: false
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

  handleOrder = () => {
    let products = this.state.cart
    let printProducts = products.map(product => (
      {
        id: product.id,
        options: [
          {
            id: product.color,
            value: product.colorId
          },
          {
            id: product.capacity,
            value: product.capacityId
          }
        ],
        amount: product.price,
        quantity: product.quantity
      }
    ));

    let printObject = {
      user: this.state.user,
      products: printProducts
    }

    this.setState({
      cart: [],
      success: true
    })

    console.log(printObject);

    setTimeout(() => {  
      this.setState({
        success: false
      })
    }, 3000);
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
              handleOrder={this.handleOrder}
              success={this.state.success}
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
                handleOrder={this.handleOrder}
                success={this.state.success}
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
