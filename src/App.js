// import { render } from "@testing-library/react";
import React, { Component } from "react";
import './App.css';

//Потребителски данни и други евенти 1:05 - 1:22

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gender: "",
    };
  }

  handleInput = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);

  }

  render() {
    return (
      <div className="App" style={{ padiing: 25 }}>
        <form onSubmit={this.handleSubmit} >
          <input id='name' value={this.state.name} onChange={this.handleInput} type="text" placeholder="име" autoComplete="off" />
          <input id='email' value={this.state.email} onChange={this.handleInput} type="email" placeholder="e-mail" autoComplete="off" />
          <br />
          <select id="gender" value={this.state.gender} onChange={this.handleInput}>


            <option value=""></option>
            <option value="мъж">Мъж</option>
            <option value="жена">Жена</option>

          </select>
          <br /><br />
          <input type="submit" value="Потвърди" />

        </form>

        <hr />

        <div style={{ textAlign: "left" }}>
          <h2>Име: {this.state.name}</h2>
          <h2>Е-mail: {this.state.email}</h2>
          <h2>Пол: {this.state.gender}</h2>

        </div>
      </div>

    )
  }

}


//LIFE CYCLE 55-1:05

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   componentDidMount() {
//     this.timer=setInterval(this.increment,50);
//   }

//   componentDidUpdate(prevProops,prevState){
//     console.log("Ready");
//     if( prevState.counter===50 ) {this.setState({counter:0}) ;}

//   }

//   componentWillUnmount(){
//     clearInterval(this.timer);
//   }



//   increment = () => {
//     this.setState((prevState) => { return { counter: ++prevState.counter }; });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h2>Сегашният counter e {this.state.counter}</h2>
//       </div>

//     )
//   }
// }



//BUTTON ICREMENT 43-55

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { counter: 0 };
//   }

//   increment = () => {
//     this.setState((prevState) => { return { counter: ++prevState.counter }; });
//   }

//   decrement =() => {
//     this.setState((aprev) => { return {counter: --aprev.counter };} );
//   }

//   reset=() => {
//   this.setState({ counter: 0 });
//   }

//   render(){
//     return(
//         <div className="App">
//           <h2>Сегашният counter e {this.state.counter}</h2>
//           <button onClick={this.decrement}>Decrement</button>
//           <button onClick={this.increment}>Increment</button>
//           <button onClick={this.reset}>Reset </button>

//         </div>

//     );

//   }



// }




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