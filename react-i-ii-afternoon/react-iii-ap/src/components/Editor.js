import React, { Component } from "react";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  edit = () => {

  };

  delete = () => {

  };

  new = () => {

  };

  render() {
    return <div>
  <button onClick={this.props.delete}>Delete</button>
    </div>;
  }
}

export default Editor;
