import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.page.html',
  styleUrls: ['./new-user.page.scss'],
})
export class NewUserPage implements OnInit {
  form: FormGroup
  showpassword: boolean = true;
  constructor(public login: LoginService,private router: Router, private formaBuilder: FormBuilder) {  this.createForm();}

  ngOnInit() {
  }

  
  togglePasswordText() {
    this.showpassword = !this.showpassword;
  }

  emailInvalid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  nameInvalid(){
    return this.form.get('displayName').invalid && this.form.get('displayName').touched;
  }

   passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  createForm(){
    this.form = this.formaBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      displayName : ['',[Validators.required]],
      password : ['',[Validators.required]]
    })
  }

  signUp(email, password) {

    // this.login.RegisterUser(email.value, password.value)      
    // .then((res) => {  
    //     this.login.SendVerificationMail()
    //     this.router.navigate(['verify-email']);
    // }).catch((error) => {
    //   window.alert(error.message)
    // })
  }
}
