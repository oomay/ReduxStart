export class UserEntity {
    public login : string;
    public password : string;
  
    public constructor(login:string) {
      this.login = login;
      this.password = '';
    }
  }
  