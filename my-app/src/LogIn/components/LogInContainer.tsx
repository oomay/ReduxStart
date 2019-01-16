import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ILogInEntity } from 'src/model/LogIn';
import { IState } from 'src/States';
import { AuthenticateAction, loginRequestStartedAction, updateEditingLogin } from '../actions';
import { LogInPage } from './LogIn';


const mapStateToProps = (state:IState) => {
    return {
      loginInfo: state.sessionReducer.editingLogin     
    }
}

const mapDispatchToProps = (dispatch:Dispatch<AuthenticateAction>) => {
  return {
    performLogin: (loginInfo : ILogInEntity) => dispatch(loginRequestStartedAction(loginInfo))   ,
    updateLoginInfo: (loginInfo : ILogInEntity, fieldName: string, value: any) => dispatch(updateEditingLogin(loginInfo, fieldName, value)),
 }
}

export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(LogInPage);