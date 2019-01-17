import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IState } from 'src/Reducers';
import {fieldChanged, IRegisterUserAction, registerUser} from './actions';
import { RegistrationPage } from './Components/Registration';


const mapStateToProps = (state:IState)=>
{
    return {
        message: state.userRegistrationReducer.message,
        user: state.userRegistrationReducer.user       
    }
}

const mapDispatchToProps = (dispatch: Dispatch<IRegisterUserAction>)=>{
    return {
        onChange: (user: IUserEntity, fieldName: string, value: string) =>
     dispatch(fieldChanged(user, fieldName, value)),
        onSave: (user: IUserEntity) => dispatch(registerUser(user)),
    }
}

export const RegistrationFormContainer = connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
