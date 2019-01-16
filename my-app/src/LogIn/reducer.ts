import {ILogInEntity} from '../model/LogIn';
import { IValidateAction } from './actions';
import * as actionTypes from './actionTypes'

export interface ISessionState {   
   loginInfo?:ILogInEntity
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

        const newLoginInfo: ILogInEntity = {
         ...state.loginInfo,
         [action.fieldName]: action.value
       };
         
          return {...state, loginInfo:newLoginInfo }
       
      //    if(action.fieldName==='login')
      //   {
      //    return {...state, loginInfo:{login: String(action.value), password:''} }
      //   }
      //   else
      //   {
      //   return {...state, loginInfo:{login: '', password:String(action.value)} }
      
     
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





