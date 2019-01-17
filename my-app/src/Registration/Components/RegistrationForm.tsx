import * as React from 'react';
import { Button } from 'src/Common/Components/Buttons';
import { Input } from 'src/Common/Components/Input';


interface IProps {
  user:IUserEntity;  
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const RegistrationForm: React.StatelessComponent<IProps> = (props) => {
  return (
    <form>
      <h3>Get an account</h3>

      <Input
        name="firstname"
        label="First Name"
        value={props.user.firstname}
        onChange={props.onChange}
        type='text'
      />

      <Input
              name="lastname"
              label="Last Name"
              value={props.user.lastname}
             onChange={props.onChange}
             type='text'
            />

      <Input
              name="company"
              label="Company"
              value={props.user.company}
             onChange={props.onChange}
             type='text'
            />

        <Input
              name="email"
              label="Email"
              value={props.user.email}
             onChange={props.onChange}
             type='text'
            />

        <Input
              name="password"
              label="Password"
              value={props.user.password}
             onChange={props.onChange}
             type='password'
            />

      <Input
              name="confirmPassword"
              label="Confirm Password"
              value={props.user.confirmPassword}
             onChange={props.onChange}
             type='password'
            />

      <Button
        label="Signup"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};

