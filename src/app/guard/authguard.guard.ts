import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/services/auth.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
constructor(private authService:AuthService){

}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(!this.authService.isAuthGuardEnable()){
              console.log('notEnabled!!')
              return false;
        }
    return true;
  }
}
