import * as React from 'react';
import { Button } from 'src/Common/Components/Buttons';
import { Input } from 'src/Common/Components/Input';
import { UserEntity } from '../model/UserEntity';

interface IProps {
  member: UserEntity;  
  onChange: (fieldName: string, value: string) => void;
  onSave: () => void;
}

export const MemberForm: React.StatelessComponent<IProps> = (props) => {
  return (
    <form>
      <h1>Manage member</h1>

      <Input
        name="login"
        label="Login"
        value={props.member.login}
        onChange={props.onChange}
        error={
          ''
        }
        type='text'
      />

      <Input
        name="password"
        label="Password"
        value={props.member.password}
        onChange={props.onChange}
        type='text'
      />

      <Button
        label="Save"
        className="btn btn-default"
        onClick={props.onSave}
      />
    </form>
  );
};
