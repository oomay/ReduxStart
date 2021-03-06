import * as React from 'react';
import { Button } from 'src/Common/Components/Buttons';
import { Input } from 'src/Common/Components/Input';
import { ILogInEntity } from 'src/model/LogIn';


interface IProps {
  loginInfo:ILogInEntity;  
  onChange: (fieldName: string, value: string) => void;
  onLogIn: () => void;
}

export const LogInForm: React.StatelessComponent<IProps> = (props) => {
  return (
    <form>
      <h3>Log into your account </h3>

      <Input
        name="login"
        label="Email"
        value={props.loginInfo.login || ''}
        onChange={props.onChange}
        type='text'
      />

      <Input
        name="password"
        label="Password"
        value={props.loginInfo.password || ''}
         onChange={props.onChange}
         type='password'
      />

      <Button
        label="LogIn"
        className="btn btn-default"
        onClick={props.onLogIn}
      />
    </form>
  );
};

