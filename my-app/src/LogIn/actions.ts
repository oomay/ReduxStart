import { Action } from 'redux';
import { ILogInEntity } from 'src/model/LogIn';
import { ILoginResponse } from 'src/model/loginResponse';
import * as actionTypes from './actionTypes'

export interface IValidateAction extends Action{
  loginInfo:ILogInEntity  
  fieldName:string, 
  value:string
}

export interface IAuthenticateAction extends Action{
  loginInfo:ILogInEntity  
}

  export type AuthenticateAction =   IValidateAction | IAuthenticateAction

  export const loginRequestCompletedAction = (loginResponse : ILoginResponse) => {
  return {
    payload: loginResponse,
    type: actionTypes.USERPROFILE_PERFORM_LOGIN   
  }
}

export const updateEditingLogin = (editingLogin:ILogInEntity, fieldName:string, value:string):IValidateAction =>({
  'fieldName' : fieldName,
  loginInfo:editingLogin,  
  type:actionTypes.USERPROFILE_UPDATE_EDITING_LOGIN,   
  'value':value, 
})

export const loginRequestStartedAction = (login : ILogInEntity):IAuthenticateAction => {

  return {
    loginInfo: login,
    type: actionTypes.LOAD_USER_PROFILE    
  }
 
}


