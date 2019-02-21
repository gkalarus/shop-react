import React from 'react';
import '../styles/Cart.css';
import OrderPage from '../pages/OrderPage';
import CartCounter from '../components/CartCounter';

class Cart extends React.Component {
  
  state = {
    active: false
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        active: !prevState.active
      }
    })
  }

  render() {
    return(
      <div className="cartContainer">
        <button onClick={this.handleClick} className="cartIcon">
          <CartCounter cart={this.props.cart} />
        </button>
        <OrderPage 
          cart={this.props.cart} 
          handleDeleteFromCart={this.props.handleDeleteFromCart}
          orderClass='subOrder'
          active={this.state.active}
          user={this.props.user}
          handleOrder={this.props.handleOrder}
        />
      </div>
    )
  }
}
 
export default Cart;