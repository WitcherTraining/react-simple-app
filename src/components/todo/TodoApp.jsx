import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/todos" component={ListTodosComponent} />
              <Route path="" component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </>
        </Router>

        {/* <LoginComponent/>
                <WelcomeComponent/> */}
      </div>
    );
  }
}

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
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
        {this.state.hasLoginFailed && <div>Invalid credentials</div>}
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
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }

  loginClicked() {
    if (this.state.username === "witcher" && this.state.password === "dummy") {
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

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome to {this.props.match.params.name}. You can manage your todos{" "}
        <Link to="/todos">here</Link>
      </div>
    );
  }
}

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          description: "Learn to skiing",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: "Become an expert at JavaScript",
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: "Learn React",
          done: false,
          targetDate: new Date(),
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Is done?</th>
              <th>Target date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div><a href="http://www.epam.com" className="navbar-brand">EPAM</a></div>
              <ul className="navbar-nav">
                  <li><Link className="nav-link" to="/welcome/witcher">Home</Link></li>
                  <li><Link className="nav-link" to="/todos">Todos</Link></li>
              </ul>
              <ul className="navbar-nav navbar-collapse justify-content-end">
                  <li><Link className="nav-link" to="/login">Login</Link></li>
                  <li><Link className="nav-link" to="/logout">Logout</Link></li>
              </ul>
          </nav>
      </header>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr /> Footer
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error occured</div>;
}

// function ShowInvalidCredentials (props) {
//     if(props.hasLoginFailed) {
//         return <div>Invalid credentials</div>
//     } else {
//         return null
//     }
// }

// function ShowSuccessMessage(props) {
//     if(props.showSuccessMessage) {
//         return <div>Login sucessful</div>
//     } else {
//         return null
//     }
// }

export default TodoApp;
