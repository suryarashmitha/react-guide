import React, {Component} from 'react'; 
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = { userName: ''};

  usernameHandler = (event) => {
    this.setState({ userName: event.target.value });
  }

  removeCharHandler = index => {
    const userName = [...this.state.userName];
    userName.splice(index, 1);
    this.setState({userName: userName.join('')});
  }

  render() {
    let charList = [...this.state.userName];
    let newArray = <div>
      {charList.map( (char, i) => {
        return (
          <Char char={char}
             key={i}
             click = {()=> this.removeCharHandler(i)} /> 
         );
      })}
    </div>
    return (
      <div className="App">
        <input 
          type = 'text'
          onChange = {(event) => this.usernameHandler(event)}
          value = {this.state.userName} />
        <Validation nameLength = {this.state.userName.length} />
        {newArray}
      </div>
    );
  }
}

export default App;
