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
    .post('http://localhost:4001/posts/',this.state.note)
    .then((res)=> console.log(res))
    .catch((error)=>console.log('error'));
    this.setState({
      showModal: !this.state.showModal,
      note: {
        firstname: '',
        lastname: '',
        phone: '',
        role: '',
        message: ''
      },
    })
    axios.get('http://localhost:4001/posts/').then(res => this.setState({ data: res.data }))
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
      {this.state.showModal && <Modal click={this.modalHandler}{...this.state.note} submit={this.submitHandler}/>}
    </div>
  );
}
}
export default App;
