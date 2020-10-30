import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  constructor(private login:LoginService,private router: Router) { }

  ngOnInit() {}

  closeSession(){
    this.login.logout();
    this.router.navigateByUrl('/');
  }

}
