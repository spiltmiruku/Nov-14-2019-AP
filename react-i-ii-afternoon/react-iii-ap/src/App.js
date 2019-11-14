import React from 'react';
import './App.css';

import Home from './components/Home';
import Editor from './components/Editor';
import Navigation from './components/Navigation';
import Card from './components/Card';
import data from './data';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      ppl: data,
      i: 0
    }
  }

handleClick = (e) => {
  if (e.target.name === 'next'){
    this.setState({
      i: this.state.i + 1
    })
    }else {
      this.setState({
        i: this.state.i - 1
      })
    }
  }



  render(){
    return (
      <div className="App">

      <Home />
      <Card />
      <Navigation />
      <Editor />


    </div>
    )
  }

}



export default App;
