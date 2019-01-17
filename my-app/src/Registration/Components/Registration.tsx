import * as React from 'react';
import { RegistrationForm } from './RegistrationForm';

interface IProps{
  user: IUserEntity;
  message:string;
  onChange: (user: IUserEntity, fieldName: string, value: string) => void;
  onSave: (user: IUserEntity) => void;
}

export class RegistrationPage extends React.Component<IProps, {}> {
     constructor(props:IProps) {
       super(props);    
       this.onChange = this.onChange.bind(this);
       this.onSave = this.onSave.bind(this);
     }  
    
     public render() {
        return (         
        <div>
          <label>
            {this.props.message}
          </label>
          <RegistrationForm
            user={this.props.user}            
            onChange={this.onChange}
            onSave={this.onSave}
          />
        </div>
        );
     }    
     
       private onChange(fieldName: string, value: string) {
         this.props.onChange(this.props.user, fieldName, value);
       }
     
      private onSave() {       
        this.props.onSave(this.props.user);
      }

    }