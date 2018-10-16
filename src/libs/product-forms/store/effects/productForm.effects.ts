import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as ProductFormAction from '../actions/productForm.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {SmartComplainceService} from '../../services/smart-complaince.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class ProductFormEffects{
    constructor(private action$:Actions,private fromService:SmartComplainceService){}

    @Effect()
    loadProductForm$ = this.action$.ofType(ProductFormAction.LOAD_PRODUCT_FORM)
        .pipe(
            switchMap((action:ProductFormAction.LoadProductForm)=> {
                return this.fromService.getProductDetails(action.payload).pipe(map((item)=>new ProductFormAction.LoadProductFormSuccess(item)),
                catchError(error=>of(new ProductFormAction.LoadProductFormFail(error)))
            )})
        )
}