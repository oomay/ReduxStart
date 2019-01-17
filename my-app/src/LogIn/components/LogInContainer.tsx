import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ILogInEntity } from 'src/model/LogIn';
import { IState } from 'src/Reducers';
import { authenticateRequestStartedAction } from '../authenticateActions';
import { AuthenticateAction, updateEditingLogin } from '../logInActions';
import { LogInPage } from './LogIn';


const mapStateToProps = (state:IState) => {
    return {
      loginInfo: state.sessionReducer.loginInfo     
    }
}

const mapDispatchToProps = (dispatch:Dispatch<AuthenticateAction>) => {
  return {
    performLogin: (loginInfo : ILogInEntity) => dispatch(authenticateRequestStartedAction(loginInfo))   ,
    updateLoginInfo: (loginInfo : ILogInEntity, fieldName: string, value: any) => dispatch(updateEditingLogin(loginInfo, fieldName, value)),
 }
}

export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(LogInPage);