import React from "react";
import "./App.css";

import Home from "./components/Home";
import Editor from "./components/Editor";
import Navigation from "./components/Navigation";
import Card from "./components/Card";
import data from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: data,
      i: 0,
      name: "Kate"
    };
  }

  handleClick = e => {
    if (e.target.name === "next") {
      if (this.state.i === this.state.people.length - 1) {
        this.setState({
          i: 0
        });
      } else {
        this.setState({
          i: this.state.i + 1
        });
      }
    } else {
      if (this.state.i === 0) {
        this.setState({
          i: this.state.people.length - 1
        });
      } else {
        this.setState({
          i: this.state.i - 1
        });
      }
    }
  };

  handleChangeName = name => {
    // console.log('hit change name', name)
    this.setState({
      name
    });
  };

  edit = () => {};

  delete = () => {
    let peoplecopy = this.state.people.slice();
    peoplecopy.splice(this.state.i, 1);
    this.setState({
      people: peoplecopy
    });
  };

  new = () => {};

  render() {
    console.log(this.state.name);
    return (
      <div className="App">
        <Home />
        {
          <Card
            tot={this.state.people.length}
            i={this.state.i}
            person={this.state.people[this.state.i]}
          />
        }

        <Navigation handleClick={this.handleClick} />
        <Editor delete={this.delete} />
      </div>
    );
  }
}

export default App;
