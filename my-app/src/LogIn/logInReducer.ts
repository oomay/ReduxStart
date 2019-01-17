import {ILogInEntity} from '../model/LogIn';
import * as actionTypes from './actionTypes'
import { IValidateAction } from './logInActions';

export interface ISessionState {   
   loginInfo:ILogInEntity
}


export const initialState: ISessionState = {
   loginInfo:{
      login:'',
      password:'' 
   }    
};

export const logInReducer =  (state = initialState, action:IValidateAction):ISessionState => {
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
   };       

      return state;
};


   
   








