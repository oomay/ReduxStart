import { Action } from 'redux'; 
import { ILogInEntity } from 'src/model/LogIn';
import { ILoginResponse } from 'src/model/loginResponse';
import * as actionTypes from './actionTypes'

export interface IUserProfileAction extends Action{
    userProfile?:ILoginResponse,
    error?:string
    credentials?:ILogInEntity
}

export const authenticateRequestStartedAction = (credentials:ILogInEntity):IUserProfileAction => {
     return {
        'credentials':credentials,
         type: actionTypes.AUTHENTICATE_REQUEST         
    };
}

export const authenticateSuccess = (userProfile:ILoginResponse):IUserProfileAction => {
    return {
        type: actionTypes.AUTHENTICATE_SUCCESS, 
        'userProfile':userProfile
    };
}

export const heroError = (message: string):IUserProfileAction => {
    return {
        error:message,
        type: actionTypes.AUTHENTICATE_ERROR, 
    }
}