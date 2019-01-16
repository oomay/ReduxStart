import * as React from 'react';
import { ILogInEntity } from 'src/model/LogIn';
import { LogInForm } from './LogInForm';

interface IProps{
  loginInfo:ILogInEntity 
  updateLoginInfo : (loginInfo: ILogInEntity, fieldName: string, value: string) => void;
  performLogin: (logIn: ILogInEntity) => void;
}

 export class LogInPage extends React.Component<IProps, {}> {

     constructor(props:any) {
           super(props);        
           this.onChange = this.onChange.bind(this);
           this.onSubmit = this.onSubmit.bind(this);
         }       
       
        
        public render() {
            return (
              <LogInForm
              loginInfo={this.props.loginInfo}            
              onChange={this.onChange}
              onLogIn={this.onSubmit}
              />
            );
        }        
        
        private onChange(fieldName: string, value: any) {
          this.props.updateLoginInfo(this.props.loginInfo, fieldName, value);
        }
      
      
        private onSubmit() {
         
          this.props.performLogin(this.props.loginInfo);
        }
    }
