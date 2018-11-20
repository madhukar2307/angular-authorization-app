import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

import { UserModel } from '../_models/registration.model';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  @Injectable()
  export class UserService {
  
    constructor(private http: HttpClient) {}
  
    private userUrl = 'http://localhost:9091/';
  
    registerUser (user: UserModel): Observable<String> {
        return this.http.post<String>(this.userUrl+'users/signup', user);
       }

  
  }