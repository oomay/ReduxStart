import * as React from 'react';
import { UserEntity } from '../model/UserEntity';
import { MemberForm } from './LogInForm';

interface IProps { 
  member: UserEntity;
  onChange: (member: UserEntity, fieldName: string, value: string) => void;
  onSave: (member: UserEntity) => void;
}

export class LogInPage extends React.Component<IProps, {}> {
  constructor(props:any) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  } 

  public render() {
    return (
      <MemberForm
        member={this.props.member}        
        onSave={this.onSave}
        onChange={this.onChange}
      />
    );
  }

  private onChange(fieldName: string, value: string) {
    this.props.onChange(this.props.member, fieldName, value);
  }

  private onSave() {
    this.props.onSave(this.props.member);
  }
}
