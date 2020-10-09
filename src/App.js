import React from 'react';
import Anonyme from './Assets/anonyme.png';
import './App.css';

export default class App extends React.Component {
  state ={
    fullName: "Maher Abderrahmen",
    bio : "Tunisan",
    imgSrc : Anonyme,
    profession : "Fullstack web developer",
    show: false,
  };
  
  handleToglle = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  timer = () => {
    var k = new Date();
    var l = k.toLocaleTimeString();
    document.getElementById("time").innerHTML = l;
  };
  componentDidMount = () => {
    var x = setInterval(this.timer, 1000);
    return x;
  };
  render() {
    return (
      
      <div className="App">
        <div>
          <span id="time">timer started</span>
        </div>
        <button onClick ={this.handleToglle}>toglle</button>
        {this.state.show === true ?( <div>
        <h1>{this.state.fullName}</h1>
        <span>{this.state.bio}</span>
        <div><img src={Anonyme} alt = "anonyme"/></div>
        <span>{this.state.profession}</span></div>) : null}
        
      </div>
    );
  }
}

