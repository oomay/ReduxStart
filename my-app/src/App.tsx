import * as React from 'react';
import './App.css';
import { LogInContainer } from './LogIn/LogInContainer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <LogInContainer />
      </div>
    );
  }
}

export default App;
