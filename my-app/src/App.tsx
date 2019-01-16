import * as React from 'react';
import './App.css';
import { LoginContainer } from './LogIn/Components/LogInContainer';


class App extends React.Component {
  public render() {
    return (
      <div className="App">
         <LoginContainer />
      </div>
    );
  }
}

export default App;
