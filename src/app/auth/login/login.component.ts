import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  private router = inject(Router)
  /*
  constructor(private router: Router) { }
  */

  login() {

    this.router.navigateByUrl('/dashboard')

  }


}
