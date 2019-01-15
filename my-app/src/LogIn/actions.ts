import * as actionTypes from './ActionTypes';
import { UserEntity } from './model/UserEntity';

export const updateUserProfileName = (user : UserEntity, fieldName: string, value: string ) => ({  
    payload : user,  
    type: actionTypes.FIELD_CHANGED   
});

export const saveMemberAction = (user: UserEntity) => ({
    payload : user,  
    type: actionTypes.SAVE
});
  