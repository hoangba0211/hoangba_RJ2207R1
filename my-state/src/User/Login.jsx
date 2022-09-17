// import React from "react";
// import Button from "../components/Button";
// import Heading1 from "../components/Heading_1";

// class Login extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value_h1: "Please Log in",
//             value_btn: "Log in",
//             onClick: this.login,
//         }
//     }
//     logout = () => {
//         this.setState({
//             value_h1: "Please Log in!",
//             value_btn: "Log in",
//             onClick: this.login
//         })
//     }
//     login = () => {
//         this.setState({
//             value_h1: "Welcome!",
//             value_btn: "Log out",
//             onClick: this.logout
//         })
//     }
//     render() {
//         return(
//             <>
//                 <div className="row" style={{flexDirection:"column"}}>
//                     <Heading1 value={this.state.value_h1}/>
//                     <Button className="login" value={this.state.value_btn} onClick={this.state.onClick}/>
//                 </div>          
//             </>
//         )
//     }
// }
// export default Login
import React, { Component } from 'react';
import Home from '../components/Home';

class Login extends Component{
  constructor (props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogIn = () => {
    this.setState({ isLoggedIn: true })
  }

  handleLogOut = () => {
    this.setState({ isLoggedIn: false })
  }
  
  render () {
    const { isLoggedIn } = this.state
    if (isLoggedIn) return (<Home onLogOut={this.handleLogOut} />)
    return (
      <div style={{textAlign: 'center'}}>
        <div>
            <h1>Please Log in</h1>
            <button onClick={this.handleLogIn}>Log in</button>
        </div>
      </div>
    )
  }
}
 
export default Login