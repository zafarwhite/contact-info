import React, { Component, Fragment } from 'react';
import './App.css';

export default class App extends Component {
  state = {
    inputFirstname: '',
    inputLastname: '',
    inputPhoneNumber: '',
    addData: {
      name: '',
      surname: '',
      phone: ''
    }
  }
  handleInputFirstnameChange = ({target: { value }}) => {
    this.setState({
      inputFirstname: value
    })
  }
  handleInputLastnameChange = ({target: { value }}) => {
    this.setState({
      inputLastname: value
    })
  }
  handleInputPhoneChange = ({target: { value }}) => {
    this.setState({
      inputPhoneNumber: value
    })
  }
  handleAdd = (e) => {
    e.preventDefault();
    const { inputFirstname, inputLastname, inputPhoneNumber } = this.state;
    this.setState({
      inputFirstname: '',
      inputLastname: '',
      inputPhoneNumber: '',
      addData: {
        name: inputFirstname,
        surname: inputLastname,
        phone: inputPhoneNumber
      }
    })

  }

  render(){
    const { inputFirstname, inputLastname, inputPhoneNumber, addData } = this.state;
    const { name, surname, phone } = addData;
    return (
      <Fragment>
        <header className="App-header">
          <h1>Information of Contacts</h1>
        </header>
        <form className="section">
          <label className="info-items">
            Firstname:
            <input 
              className="item"
              type="text" 
              name="name" 
              placeholder="Please, write your name"
              value={inputFirstname}
              onChange={this.handleInputFirstnameChange} 
            />
          </label>
          <br/>
          <label className="info-items">
            Lastname:
            <input
                className="item" 
                type="text" 
                name="surname" 
                placeholder="Your surname"
                value={inputLastname}
                onChange={this.handleInputLastnameChange} 
              /> 
          </label>
          <br/>
          <label className="info-items">
            Phone:
            <input 
                className="item"
                type="tel"
                name="phone"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                placeholder="Please, write your number"
                value={inputPhoneNumber}
                onChange={this.handleInputPhoneChange} 
              /> 
          </label>
          <br/>
          <button className="btn-add btn" onClick={this.handleAdd}>ADD</button>
        </form>

        <div className="footer-info">
          <div className="footer-main">
            <p className="itemP">{name}</p>
            <p className="itemP">{surname}</p>
            <p className="itemP">{phone}</p>
          </div>
          <button className="btn-delete btn">Delete</button>
          <button className="btn-edit btn">Edit</button>
        </div>
        

      </Fragment>
    )
  }
}