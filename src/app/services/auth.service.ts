import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {
  private _isAuthenticated: BehaviorSubject<any> = new BehaviorSubject(true);
  private authEnable:boolean;
  constructor() { }

  
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

}
