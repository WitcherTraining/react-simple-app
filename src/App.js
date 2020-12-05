import React, { Component } from "react";
import "./App.css";
import "./bootstrap.css";
// import FirstComponent from "./components/examples/FirstComponent";
// import SecondComponent from "./components/examples/SecondComponent";
// import ThirdComponent from "./components/examples/ThirdComponent";
// import Counter from "./components/counter/Counter";
import TodoApp from "./components/todo/TodoApp";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        <TodoApp />
      </div>
    );
  }
}

// class LearningComponents extends Component {
//   render() {
//     return (
//       <div className="LearningComponents">
//         Hello world!
//         <FirstComponent></FirstComponent>
//         <SecondComponent />
//         <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }

export default App;
