import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class IauthService {

  constructor(private http:HttpClient) { }
  register(data:object):Observable<any>{
    return this.http.post(`${environment.baseUrl}auth/signup`,data)
  }
  login(data:object):Observable<any>{
    return this.http.post(`${environment.baseUrl}auth/signin`,data)
  }
}
