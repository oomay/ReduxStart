import {ILogInEntity} from '../model/LogIn';
import { IValidateAction } from './actions';
import * as actionTypes from './actionTypes'

export interface ISessionState {   
   loginInfo:ILogInEntity
}

export const initialState: ISessionState = {
   loginInfo:{
      login:'',
      password:'' 
   }    
};

export const sessionReducer =  (state = initialState, action:IValidateAction):ISessionState => {
      switch (action.type) {
       
        case actionTypes.USERPROFILE_UPDATE_EDITING_LOGIN:
            const newLoginInfo = {
               ...state.loginInfo,
               [action.fieldName]: action.value
            }

            return {
               ...state,
               loginInfo: newLoginInfo     
            };
            
            case actionTypes.LOAD_USER_PROFILE:
            // tslint:disable-next-line:no-console
            console.log(action.loginInfo.login + '....' + action.loginInfo.password)
            return{...state}
   };       

      return state;
};







