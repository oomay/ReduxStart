import { combineReducers} from 'redux';
import { ISessionState, sessionReducer } from './LogIn/reducer';

export interface IState{   
    sessionReducer: ISessionState
}

export const reducers = combineReducers<IState>({   
   sessionReducer
})