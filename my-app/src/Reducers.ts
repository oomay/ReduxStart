import { combineReducers} from 'redux';
import { ISessionState, logInReducer } from './LogIn/logInReducer';
import { IUserState, userRegistrationReducer } from './Registration/reducer';

export interface IState{  
    userRegistrationReducer : IUserState, 
    sessionReducer: ISessionState
}

export const reducers = combineReducers<IState>({   
   sessionReducer: logInReducer,
   userRegistrationReducer
})