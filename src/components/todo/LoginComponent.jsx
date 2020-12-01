import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "witcher",
        password: "",
        hasLoginFailed: false,
        showSuccessMessage: false,
      };
      // this.handleUsernameChange = this.handleUsernameChange.bind(this)
      // this.handlePasswordChange = this.handlePasswordChange.bind(this)
      this.handleChange = this.handleChange.bind(this);
      this.loginClicked = this.loginClicked.bind(this);
    }
  
    render() {
      return (
        <div>
          <h1>Login</h1>
          <div className="container">
            {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid credentials</div>
            )}
            {this.state.showSuccessMessage && <div>Login sucessful</div>}
            {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
            User name:{" "}
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            ></input>
            Password:{" "}
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <button className="btn btn-success" onClick={this.loginClicked}>
              Login
            </button>
          </div>
        </div>
      );
    }
  
    loginClicked() {
      if (this.state.username === "witcher" && this.state.password === "dummy") {
          AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        this.props.history.push(`/welcome/${this.state.username}`);
        // this.setState({showSuccessMessage:true})
        // this.setState({hasLoginFailed: false})
      } else {
        console.log("Failed");
        this.setState({ showSuccessMessage: false });
        this.setState({ hasLoginFailed: true });
      }
  
      // console.log(this.state)
    }
  
    handleChange(event) {
      // console.log(event.target.value)
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  
    // handleUsernameChange(event) {
    //     console.log(event.target.value)
    //     this.setState(
    //         {
    //             [event.target.name]: event.target.value
    //         }
    //     )
    // }
  
    // handlePasswordChange(event) {
    //     console.log(event.target.value)
    //     this.setState({password: event.target.value})
    // }
  }

  export default LoginComponent