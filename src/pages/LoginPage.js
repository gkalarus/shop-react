import React from 'react';
import '../styles/LoginPage.css';

class LoginPage extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    houseNumber: '',
    city: '',
    postCode: '',
    pass: '',
    message: '',
    errors: {
      firstName: false,
      lastName: false,
      email: false,
      street: false,
      houseNumber: false,
      city: false,
      postCode: false,
      pass: false,
    }
  }

  messages = {
    firstName_incorrect: 'First name must contain more than 3 characters',
    lastName_incorrect: 'Last name must contain more than 3 characters',
    street_incorrect: 'The street name must contain more than 3 characters',
    houseNumber_incorrect: 'Enter your house number',
    city_incorrect: 'City name must contain more than 3 characters',
    postCode_incorrect: 'The postcode must contain the following format XX-XXX',
    email_incorrect: 'Your email is missing @',
    password_incorrect: 'Your password must contain more than 5 characters',
  }

  handleChange = (e) => {

    const name = e.target.name;
    const type  = e.target.type;

    if(type === 'text' || type === 'password' || type === 'number' || type === 'email' ) {
      const value = e.target.value;
      this.setState({
        [name]: value
      })
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const validation = this.formValidation();
    if(validation.correct) {
      this.props.handleGetUserData(this.state);

      this.setState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        houseNumber: '',
        city: '',
        postCode: '',
        pass: '',
        message: 'Formularz został wysłany',
        errors: {
          firstName: false,
          lastName: false,
          email: false,
          street: false,
          houseNumber: false,
          city: false,
          postCode: false,
          pass: false,
        }
      })
    } else {
      this.setState({
        errors: {
          firstName: !validation.firstName,
          lastName: !validation.lastName,
          email: !validation.email,
          street: !validation.street,
          houseNumber: !validation.houseNumber,
          city: !validation.city,
          postCode: !validation.postCode,
          pass: !validation.password,
        }
      })
    }
  }

  formValidation = () => {
    let firstName = false;
    let lastName = false;
    let email = false;
    let street = false;
    let houseNumber = false;
    let city = false;
    let postCode = false;
    let password = false;
    let correct = false;

    if(this.state.firstName.length > 2) {
      firstName = true;
    }

    if(this.state.lastName.length > 2) {
      lastName = true;
    }

    if(this.state.email.indexOf('@') !== -1) {
      email = true;
    }

    if(this.state.street.length > 2) {
      street = true;
    }

    if(this.state.houseNumber.length > 0) {
      houseNumber = true;
    }

    if(this.state.city.length > 2) {
      city = true;
    }

    if(this.state.postCode.length === 6 && this.state.postCode.indexOf('-') === 2) {
      postCode = true;
    }

    if(this.state.pass.length > 4) {
      password = true;
    }

    if(firstName && lastName && email && street && houseNumber && city && postCode && password) {
      correct = true;
    }

    return({
      firstName,
      lastName,
      email,
      street,
      houseNumber,
      city,
      postCode,
      password,
      correct
    })
  }

  render() {
    return(
      <form className="loginForm" onSubmit={this.handleSubmit} noValidate>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} placeholder="Your first name..."/>
        {this.state.errors.firstName && <span>{this.messages.firstName_incorrect}</span>}

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} placeholder="Your last name..."/>
        {this.state.errors.lastName && <span>{this.messages.lastName_incorrect}</span>}

        <label htmlFor="email">E-mail:</label>
        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your e-mail..."/>
        {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
        
        <label htmlFor="street">Street and house number:</label>
        <div className="group">
          <div className="group-input">
            <input type="text" id="street" name="street" value={this.state.street} onChange={this.handleChange} placeholder="Your street..."/>
            {this.state.errors.street && <span>{this.messages.street_incorrect}</span>}

          </div>
          <div className="group-input">
            <input type="number" id="houseNumber" name="houseNumber" value={this.state.houseNumber} onChange={this.handleChange} placeholder="Your house number..."/>
            {this.state.errors.houseNumber && <span>{this.messages.houseNumber_incorrect}</span>}
          </div>
        </div>

        <label htmlFor="city">City and post code:</label>
        <div className="group">
          <div className="group-input">
            <input type="text" id="city" name="city" value={this.state.city} onChange={this.handleChange} placeholder="Your city..."/>
            {this.state.errors.city && <span>{this.messages.city_incorrect}</span>}
          </div>
          <div className="group-input">
            <input type="text" id="postCode" name="postCode" value={this.state.postCode} onChange={this.handleChange} placeholder="Your post code..."/>
            {this.state.errors.postCode && <span>{this.messages.postCode_incorrect}</span>}
          </div>
        </div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="pass" value={this.state.pass} onChange={this.handleChange} placeholder="Your password..."/>
        {this.state.errors.pass && <span>{this.messages.password_incorrect}</span>}
      
        <button>Log in</button>
      </form>
      
    )
  }
}
 
export default LoginPage;