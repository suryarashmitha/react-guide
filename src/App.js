import React, {Component} from 'react'; 
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = { userName: 'Challagulla'};

  usernameHandler = (event) => {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserOutput userName = {this.state.userName} />
        <UserOutput userName = {this.state.userName}/>
        <UserInput userName = {this.state.userName} changed = {this.usernameHandler} />
      </div>
    );
  }
}

export default App;
