export class User {
   uid: number;
   email: string;
   password: string
   types: string;

   constructor(user: User){
      this.uid = new Date().getTime();
      this.email = user.email;
      this.password = user.password;
      this.types = user.types;
   }
}
