import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as ProductDistributionAction from '../actions/product-distribution.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {AnalyticsService} from '../../services/analytics.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class ProductDistributionEffects{
    constructor(private action$:Actions,private fromService:AnalyticsService){}

    @Effect()
    loadVisual$ = this.action$.ofType(ProductDistributionAction.LOAD_PRODUCT_DISTRIBUTION)
        .pipe(
            switchMap((action:ProductDistributionAction.LoadProductDistribution)=> {
                return this.fromService.getAnalyticsOfBaraData().pipe(map((item)=>new ProductDistributionAction.LoadProductDistributionSuccess(item)),
                catchError(error=>of(new ProductDistributionAction.LoadProductDistributionFail(error)))
            )})
        )
}