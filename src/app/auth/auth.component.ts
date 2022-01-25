import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authStatus: boolean = false;
  
  constructor(private authService: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    // this.authService.signIn().then(
    //   () => {
    //     console.log('Sign in successful !');
    //     this.authStatus = this.authService.isAuth;
    //   }
    // )
  }

  signIn(){
    this.authService.signIn().then(
      () => {
        console.log('Sign in successful !');
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['devices']);
      }
    )
  }
  
  signOut(){
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
