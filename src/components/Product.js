import React from 'react';
import '../styles/Product.css';
import uuid from 'uuid';

class Product extends React.Component {


  state = {
    id: null,
    name: null,
    quantity: 1,
    price: null,
    colorId: '',
    colorValue: null,
    capacityId: '',
    capacityValue: null,
    colorPriceModifier: null,
    capacityPriceModifier: null,
    clickCounter: 0
  }

  componentDidMount() {
    const info = this.props.info;
    this.setState({
      id: info.id,
      name: info.name,
      price: info.price,
      colorId: info.options[0].values[0].id,
      colorValue: info.options[0].values[0].name,
      colorPriceModifier: info.options[0].values[0].priceModifier,
      capacityId: info.options[1].values[0].id,
      capacityValue: info.options[1].values[0].name,
      capacityPriceModifier: info.options[1].values[0].priceModifier,
    })
  }

  handleAddItem = () => {

    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1
      }
    })
  }

  handleDeleteItem = () => {
    if(this.state.quantity !== 1) {
      this.setState((prevState) => {
        return {
          quantity: prevState.quantity - 1
        }
      })
    }
  }


  handleColorChange = (e) => {
    const info = this.props.info;
    const id = parseInt(e.target.value);

    const colors = info.options[0].values;
    const color = colors.filter(item => item.id === id);

    this.setState({
      colorId: parseInt(e.target.value),
      colorValue: color[0].name,
      colorPriceModifier: color[0].priceModifier
    })
  }

  handleCapacityChange = (e) => {
    const info = this.props.info;
    const id = parseInt(e.target.value);

    const capacities = info.options[1].values;
    const capacity = capacities.filter(item => item.id === id);

    this.setState({
      capacityId: parseInt(e.target.value),
      capacityValue: capacity[0].name,
      capacityPriceModifier: capacity[0].priceModifier
    })
  }

  handleSendItem = () => {
    this.props.handleSendToCart(this.state, uuid.v4())
    this.setState(prevState => {
      return {
        clickCounter: prevState.clickCounter + 1
      }
    })
  }


  render() {

    const info = this.props.info;
    const colors = info.options[0].values;
    const capacities = info.options[1].values;
    const colorList = colors.map(color => <option key={color.id} value={color.id}>{color.name}</option>)
    const capacityList = capacities.map(capacity => <option key={capacity.id} value={capacity.id}>{capacity.name}</option>)

    return (
      <li>
        <h3>{info.name}</h3>
        <button className="minus" onClick={this.handleDeleteItem}></button>
        <p>{this.state.quantity}</p>
        <button className="plus" onClick={this.handleAddItem}></button>
        <label>
          Color:
          <select value={this.state.colorId} onChange={this.handleColorChange}>
            {colorList}
          </select>
        </label>
        <label>
          Capacity:
          <select value={this.state.capacityId} onChange={this.handleCapacityChange}>
            {capacityList}
          </select>
        </label>
        <button onClick={this.handleSendItem}>Add to cart</button>
        <div>Price: ${this.state.price + this.state.colorPriceModifier + this.state.capacityPriceModifier}</div>
        <div>Sum: ${((this.state.price + this.state.colorPriceModifier + this.state.capacityPriceModifier) * this.state.quantity).toFixed(2)}</div>
      </li>
    )
  }
}


 
export default Product;