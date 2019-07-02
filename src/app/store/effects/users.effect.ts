import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as UsersAction from '../actions/users.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {of} from 'rxjs/observable/of';
import { AuthService } from 'app/services/auth.service';

@Injectable()

export class UsersEffects{
    constructor(private action$:Actions,private authService:AuthService){}

    @Effect()
    loadProduct$ = this.action$.ofType(UsersAction.LOAD_USERS)
        .pipe(
            switchMap((action:UsersAction.LoadUsers)=> {
                return this.authService.getUserDetails().pipe(map((item)=>new UsersAction.LoadUsersSuccess(item)),
                catchError(error=>of(new UsersAction.LoadUsersFail(error)))
            )})
        )
}