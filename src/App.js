import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter : 0
    }
  }

  increment = () => {
    this.setState({
      counter : this.state.counter + 1
    })
  };

  decrement = () => {
    this.setState({
      counter : this.state.counter - 1
    })
  };

  render () {
    return (
      <div className="App">
        <button className='increment' onClick={this.increment}>+</button>
        <button className='decrement' onClick={this.decrement}>-</button>
        <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

export default App;
