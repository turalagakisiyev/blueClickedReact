import React, { Component } from 'react';
import './App.css'

class App extends Component {
  state = {
    message: "Click here",
    className: "click"
  }
  clickHandler = () => {
    if(this.state.message === "Click here"){
      this.setState({ message: "Clicked", className: "clicked" });
    }else{
      this.setState({ message: "Click here", className: "click" });
    }

    
  }
  render() {

    return (
      <div>
        <button className={this.state.className} onClick={this.clickHandler}>{this.state.message}</button>
      </div>
    );
  }
}

export default App;