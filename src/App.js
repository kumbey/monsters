import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const handleChange = () => {
      return this.setState({ name: "John" });
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.monsters.map((monster) => {
            return (
              <p key={monster.id}>
                {monster.name} {monster.username}
              </p>
            );
          })}
          <button onClick={handleChange}>Change text</button>
        </header>
      </div>
    );
  }
}

export default App;
