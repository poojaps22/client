import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/users/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  username: string;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.subject.subscribe((res) => {
      this.username = res;
    });
  }
}
