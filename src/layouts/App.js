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
    cart: []
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

  handleAddItem = (id, name, price, counter) => {
    console.log(id, name, price);
    let currentCart = this.state.cart;
    currentCart.push({id, name, price, counter})
 
    this.setState({
      cart: currentCart
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
                handleAddItem={this.handleAddItem}
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
