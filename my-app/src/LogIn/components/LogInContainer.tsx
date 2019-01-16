import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ILogInEntity } from 'src/model/LogIn';
import { IState } from 'src/States';
import { AuthenticateAction, loginRequestStartedAction, updateEditingLogin } from '../actions';
import { LogInPage } from './LogIn';


const mapStateToProps = (state:IState) => {
    return {
      loginInfo: state.sessionReducer.loginInfo     
    }
}

const mapDispatchToProps = (dispatch:Dispatch<AuthenticateAction>) => {
  return {
    performLogin: (logIn : ILogInEntity) => dispatch(loginRequestStartedAction(logIn))   ,
    updateLoginInfo: (loginInfo : ILogInEntity, fieldName: string, value: any) => dispatch(updateEditingLogin(loginInfo, fieldName, value)),
 }
}

export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(LogInPage);