import React from "react";
import  ReactDOM  from "react-dom";
import "./style.scss";
import User from "./components/header/User";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer"
import { Component } from "react";
class Panel extends Component {
  state = {
    theme: "",
    mode: "",
  }
  theme = () =>{
    if(this.state.theme === ""){
      document.body.classList.add('dark')
      this.setState((state)=>{
        return({
          ...state,
          theme: "dark"
        })
      })
    }else{
      this.setState((state)=>{
        document.body.classList.remove('dark')
        return({
          ...state,
          theme: ""
        })
      })
    }
  }
  mode = () =>{
    if(this.state.mode === ""){
      document.querySelector('.panel').classList.add('active')
      this.setState((state)=>{
        
        return({
          ...state,
          mode: "active",
        })
      })
    }else{
      document.querySelector('.panel').classList.remove('active')
      this.setState((state)=>{
        return({
          ...state,
          mode:""
        })
      })
    }
  }
  render(){
    return (
      <div className="panel">
        <button className="panel__button" onClick={this.mode}>
          <img src="../../assets/img/arrow.svg" />
        </button>
        <User />
        <Nav />
        <Footer switchTheme={this.theme}/>
      </div>
    )
  }
}


ReactDOM.render(<Panel/>, document.querySelector("#root"))
// убрать css весь 
// и написать setState