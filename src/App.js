import React, {Component} from 'react';
import './App.css';
import Form from './UI/Form';
import View from './components/View'
import Modal from './components/Modal';

class App extends Component {
  state = {
    showModal: false
  }

  modalHandler = (e) => {
    e.preventDefault()
    console.log('I work');

    this.setState({
      showModal: !this.state.showModal
    })
  }


render() {
  return (
    <div className="App">
      <Form submit={this.modalHandler}/>
      <View/>
      {this.state.showModal && <Modal/>}
    </div>
  );
}
}
export default App;
