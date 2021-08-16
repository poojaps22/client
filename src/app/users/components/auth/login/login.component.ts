import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/users/services/auth.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login: any = {};
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}
  loginSubmit() {
    this.authService.login(this.login).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        this.authService.subject.next('login');
        localStorage.setItem('token', res.token);
        localStorage.setItem(
          'userdetails',
          JSON.stringify(jwt_decode(res.token))
        );
        this.router.navigate(['/dashboard/']);
      },
      (err) => {}
    );
  }
}
