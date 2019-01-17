import { Action } from 'redux';
import * as actionTypes  from './ActionTypes';

export interface IRegisterUserAction extends Action{
    user:IUserEntity 
    message?:string,   
}

export interface IValidateRegistrationAction extends Action{
    user:IUserEntity  
    fieldName:string, 
    value:string
}

export interface IValidateRegistrationStatusAction extends Action{
    message:string
}

export type RegistrationAction =   IRegisterUserAction | IValidateRegistrationAction

export const fieldChanged = (user:IUserEntity, fieldName:string, value:string):IValidateRegistrationAction =>({
    'fieldName' : fieldName,
    type:actionTypes.FIELD_CHANGED,
    'user':user,   
    'value':value
})

export const registerUser = (user:IUserEntity):IRegisterUserAction =>({
    type:actionTypes.SAVE,
    'user':user
})

export const registerFailed = (message:string):IValidateRegistrationStatusAction=> ({
    'message':message,
    type: actionTypes.REGISTER_FAILURE    
})
  
export const registerSuccessful = (message:string):IValidateRegistrationStatusAction => ({
    'message':message,
    type: actionTypes.REGISTER_SUCCESSFUL    
})

