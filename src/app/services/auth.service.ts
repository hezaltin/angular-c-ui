import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {
  private _isAuthenticated: BehaviorSubject<any> = new BehaviorSubject(true);
  private authEnable:boolean;
  
  constructor(private http:HttpClient) { }

  
  setAuthenticated(state){
    this._isAuthenticated.next(state);
  }

  get getAuthValidation(){
    return this._isAuthenticated.asObservable();
  }

  isAuthValid(valid){
      this.authEnable = valid
  }

  isAuthGuardEnable(){
    return this.authEnable;
  }

  getAuthorizationToken(){
    console.log(localStorage.getItem('msal.idtoken'))
    return (localStorage.getItem('msal.idtoken'))
  }

  getSearchBooks(search):Observable<any>{
    const bookSearch = encodeURI("/books/v1/volumes?q="+search +"&maxResults=12")
     return this.http.get(bookSearch);
  }


  getUserDetails(){
    const getUserDetailsUrl = encodeURI('http://localhost:7070/api/user/photo')
        return this.http.get(getUserDetailsUrl);
  }

}
