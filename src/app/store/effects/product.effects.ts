import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as ProductAction from '../actions/product.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {SmartComplainceService} from '../../services/smart-complaince.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class ProductEffects{
    constructor(private action$:Actions,private fromService:SmartComplainceService){}

    @Effect()
    loadProduct$ = this.action$.ofType(ProductAction.LOAD_PRODUCT)
        .pipe(
            switchMap((action:ProductAction.LoadProduct)=> {
                return this.fromService.getSearchProduct(action.payload).pipe(map((item)=>new ProductAction.LoadProductSuccess(item)),
                catchError(error=>of(new ProductAction.LoadProductFail(error)))
            )})
        )
}