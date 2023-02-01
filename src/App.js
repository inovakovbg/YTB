// import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';

//BUTTON ICREMENT

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState((prevState) => { return { counter: ++prevState.counter }; });
  }

  reset=() => {
  this.setState({ counter: 0 });
  }

  render(){
    return(
        <div className="App">
          <h2>Сегашният counter e {this.state.counter}</h2>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset </button>
        
        </div>

    );

  }



}




// HEADER CONTENT FOOTER
// class App extends Component {
//   render() {

//     return (


//       <div className="App">
//         <Header title="React" />
//       </div>
//     );
//   }
// }

// class Header extends Component {
//   render() {
//     return <h1>Курс по {this.props.title}</h1>;

//   }

// }




// class App extends Component {
//   render() {

//     const Text="Изглеждам като JSX, но съм JAVA";
//     const jsxSlogan= <h3>{Text.toUpperCase()}</h3>;
//     return (


//       <div className="App">
//         <h1>Какво е JSX?</h1>
//         {jsxSlogan}
//       </div>
//     );
//   }
// }


// function App(){
//   return(
//     <h1>Аз съм компонентот от фунция</h1> 
//   );
// }

export default App