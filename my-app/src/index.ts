import { combineReducers} from 'redux';
import { UserEntity } from './LogIn/model/UserEntity';
import {  userProfileReducer } from './LogIn/reducer';

export interface IState{   
    member: UserEntity;
}

export const reducers = combineReducers<IState>({   
    member: userProfileReducer,
})