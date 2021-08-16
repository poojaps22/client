import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  subject: Subject<string> = new Subject();
  constructor(private httpClient: HttpClient) {}

  registerUser(register: Register) {
    return this.httpClient.post('/api/users/register', register);
  }
  login(data: any) {
    return this.httpClient.post('/api/users/login', data);
  }
}
