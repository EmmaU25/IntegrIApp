import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  forma: FormGroup;

  constructor(private router: Router,private formBuilder: FormBuilder,private loginService: LoginService)
  {
    this.createForm();
  }

  ngOnInit() {
  }
  
  createForm(){
    this.forma = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]]
    });
  }


  getEmailInvalid(){
    return this.forma.get('username').invalid && this.forma.get('username').touched;
  }

  getPwdInvalid(){
    this.forma.get('pwd').invalid  && this.forma.get('pwd').touched;
  }

  login(){
    this.router.navigateByUrl('/tabs');
  }

  register(){
    this.router.navigateByUrl('/new-user');
  }
}
