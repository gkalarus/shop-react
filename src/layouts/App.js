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
    user: null
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

  handleSendToCart = (product) => {

    const tempCart = this.state.cart
    tempCart.push(product)
    
    this.setState({
      cart: tempCart
    })
    
  };

  render() {

    return (
      
      <Router>
        <div className="app">
          <header>
            <Header />
          </header>
          <main>
            <aside>
              <Navigation />
            </aside>
            <section className="page">
              <Page 
                products={this.state.products} 
                handleSendToCart={this.handleSendToCart}
                cart={this.state.cart}
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
