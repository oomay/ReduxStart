import { IValidateRegistrationAction } from './actions';
import * as constants from './ActionTypes';

export interface IUserState {   
       user:IUserEntity
       message?:string   
}
export const initialState: IUserState = {
    message:'',
    user:{
        company:'' ,
        confirmPassword:'',
        email:'',
        firstname:'',
        id:0,
        lastname:'',
        password:''        
    }    
  };

export const userRegistrationReducer = (state = initialState, action:IValidateRegistrationAction):IUserState =>{
    switch (action.type)
    {
        case constants.FIELD_CHANGED:       
        const newRegistrationInfo = {
            ...state.user,
            [action.fieldName]: action.value
         }
         return {
            ...state,
            user: newRegistrationInfo     
         };
         

        case constants.SAVE:            
            return {            
                message: '', user:action.user
            } 

        // case constants.REGISTER_SUCCESSFUL:        
        //     return{
        //          message:action.message, 
        //     }     

        // case constants.REGISTER_FAILURE:        
        //     return{
        //         message:action.message
        //     }        
       
    }
    return state;
}

// const validateField = (state: IUserState, name:string, value:string) => {  
//  switch(name)
//    {
//        case 'Name':
//         if(value===''){  
            
//             return {
//                 ...state,                
//                user:{FirstName:{ErrorMessage:'Invalid name', Label:'Name *',Name:state.user.FirstName!.Name, Text:state.user.FirstName!.Text}}
//             }
//         }
//         case 'Email':
        //  if (!value.includes("@"))
        //  {
        //      // tslint:disable-next-line:no-console
        //      console.log("email")
        //          return{
        //              ...state, name, value                 
        //          }
        //  }
//     default:
    // return {
    //     ...state
    // }


