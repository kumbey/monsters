import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/CardList";
import { SearchBox } from "./components/searchbox/SearchBox";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    const handleChange = (e) => {
      this.setState({ searchField: e.target.value });
    };

    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox placeholder="search monsters" handleChange={handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
