import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  api=environment.API_URL;
  constructor(private http:HttpClient) { }

  login(email:string, contrsena:string){
    return this.http.post(`${this.api}/api/v1/auth/login`, 
    {email, contrsena}
    );
  }
}
