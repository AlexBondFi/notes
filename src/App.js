import React, {Component} from 'react';
import './App.css';
import Form from './UI/Form';
import View from './components/View';
import Modal from './components/Modal';
import Posts from './components/Posts';

import axios from 'axios';

class App extends Component {
  state = {
    showModal: false,
    data: [],
    note: {
    firstname: '',
    lastname: '',
    phone: '',
    role: '',
    message: ''}
  }

  modalHandler = (e) => {
    e.preventDefault()
    this.setState({
      showModal: !this.state.showModal
    })
  }

  changeHandler = (e) => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value // name here is the 'name' in inputs
      }
    });
  };

  submitHandler =()=>{
    axios
    .post('http://localhost:4001/posts/',{note})
    .then((res)=> console.log(res))
    .catch((error)=>console.log('error'));
  }

  componentDidMount(){
    axios.get('http://localhost:4001/posts/').then(res=>this.setState({data:res.data})) 
  }

  // componentDidMount(){
  //   fetch('http://localhost:4001/posts/')
  //   .then(res=>res.json())
  //   .then(res=>{ // wrap setState in {} and use multiple statements
  //     this.setState({data:res});
  //     console.log('this we recieve from fetch',res);
  //     console.log('this we recieve from fetch2',this.state.data);
  //   }) 
  // }


render() {
  return (
    <div className="App">
      <Form submit={this.modalHandler} change={this.changeHandler}/>
      <View {...this.state.note}/>
      <Posts data={this.state.data}/>
      {this.state.showModal && <Modal
      //  click={this.modalHandler} 
       click={this.submitHandler}
       {...this.state.note}/>}
    </div>
  );
}
}
export default App;
