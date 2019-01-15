import {connect} from 'react-redux';
import { IState } from 'src';
import { saveMemberAction, updateUserProfileName } from './actions';
import { LogInPage } from './components/LogInPage';
import { UserEntity } from './model/UserEntity';


const mapStateToProps = (state : IState) => {
  return {
    member: state.member,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    onChange: (member: UserEntity, fieldName: string, value: string) =>
      dispatch(updateUserProfileName(member, fieldName, value)),
    onSave: (member: UserEntity) => dispatch(saveMemberAction(member)) 
  }
}

export const LogInContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInPage);