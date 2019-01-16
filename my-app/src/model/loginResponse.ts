import {IUserProfile} from './userProfile';

export interface ILoginResponse {
  succeeded : boolean;
  userProfile : IUserProfile;
}