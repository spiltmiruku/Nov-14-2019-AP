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
    return <div className='editor'>
            <button className='editbuttons'>Edit</button>
            <button className='editbuttons' onClick={this.props.delete}>Delete</button>
            <button className='editbuttons'>New</button>

    </div>;
  }
}

export default Editor;
