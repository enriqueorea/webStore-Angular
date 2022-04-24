import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  private user = {
    userName: 'admin',
    password: 'root',
  };

  userName: string = '';
  password: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  signIn() {
    if (
      this.userName === this.user.userName &&
      this.password === this.user.password
    ) {
      localStorage.setItem('profile', JSON.stringify(this.user));
      this.router.navigateByUrl('/home');
      this.userName = '';
      this.password = '';
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario / Contrasena incorrectos',
      });
    }
  }
}
