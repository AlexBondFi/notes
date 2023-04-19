import React, {Component} from 'react';
import './App.css';
import Form from './UI/Form';
import View from './components/View'
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false,
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: ''
  }

  modalHandler = (e) => {
    e.preventDefault()
    console.log('I work');

    this.setState({
      showModal: !this.state.showModal
    })
  }

  changeHandler = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value // name here is the 'name' in inputs
    });
  };


render() {
  return (
    <div className="App">
      <Form submit={this.modalHandler} change={this.changeHandler}/>
      <View
      firstname={this.state.firstname}
      lastname={this.state.lastname}
      phone={this.state.phone}
      role={this.state.role}
      message={this.state.message}/>
      {this.state.showModal && <Modal
       firstname={this.state.firstname}
       lastname={this.state.lastname}
       phone={this.state.phone}
       role={this.state.role}
       message={this.state.message}
       click={this.modalHandler}/>}
    </div>
  );
}
}
export default App;
