import * as actionTypes from './ActionTypes'
import { UserEntity } from './model/UserEntity';
class UserState  {  
  public userProfile : UserEntity;  

  public constructor() {
      this.userProfile = new UserEntity("me");   
  }
} 
  
  export const userProfileReducer = (state = new UserState(), action:any) => {
    // tslint:disable-next-line:no-console
    console.log(action.payload)
    
    switch (action.type) {
   
         case actionTypes.FIELD_CHANGED:
            return handleUserProfileAction(state, action.payload);

            case actionTypes.SAVE:
            return handleUserProfileAction(state, action.payload);
     }  
    return state;
  }

  const handleUserProfileAction = (state : UserState, payload:UserEntity) => {
    const newState = {
      ...state, 
      userProfile: payload
    };
    return newState;
  }