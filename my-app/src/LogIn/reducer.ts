import {ILogInEntity} from '../model/LogIn';
import { IValidateAction } from './actions';
import * as actionTypes from './actionTypes'

export interface ISessionState {   
   editingLogin?:ILogInEntity
}

export const initialState: ISessionState = {
   editingLogin:{
      login:'',
      password:'' 
   }    
};

export const sessionReducer =  (state = initialState, action:IValidateAction):ISessionState => {
      switch (action.type) {
       
        case actionTypes.USERPROFILE_UPDATE_EDITING_LOGIN:
       
        if(action.fieldName==='login')
        {
         return {...state, editingLogin:{login: String(action.value), password:''} }
        }
        else
        {
        return {...state, editingLogin:{login: '', password:String(action.value)} }

     
      }
   }

      return state;
};


// const handlePerformLogin = (state : ISessionState, payload : ILoginResponse) => {
//   return {...state, 
//           isUserLoggedIn: payload.succeeded, 
//           userProfile: payload.userProfile
//          };  
// }





