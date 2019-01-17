import * as React from 'react';
import { LoginContainer } from 'src/LogIn/Components/LogInContainer';
import { RegistrationFormContainer } from 'src/Registration/RegistrationContainer';


class Main extends React.Component {
  public render() {
    return (
      <div className="row">
       <div className="column left">
        <LoginContainer/>
        </div>
        <div className="column right">
        <RegistrationFormContainer/>
      </div>
      </div>
      
    );
  }
}

export default Main;
