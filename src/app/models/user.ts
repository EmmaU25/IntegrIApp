export class User {
   uid: number;
   email: string;
   displayName: string;
   password: string

   constructor(user: User){
      this.uid = new Date().getTime();
      this.email = user.email;
      this.displayName = user.displayName;
      this.password = user.password;
   }
}
