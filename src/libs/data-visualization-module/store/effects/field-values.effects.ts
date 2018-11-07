import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as FieldValuesAction from '../actions/field-values.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationService} from '../../services/data-visualization.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class FieldValuesEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationService){}

    @Effect()
    loadVisual$ = this.action$.ofType(FieldValuesAction.LOAD_FIELDVALUES)
        .pipe(
            switchMap((action:FieldValuesAction.LoadFieldValues)=> {
                return this.fromService.getSearchFieldValues(action.payload).pipe(map((item)=>new FieldValuesAction.LoadFieldValuesSuccess(item)),
                catchError(error=>of(new FieldValuesAction.LoadFieldValuesFail(error)))
            )})
        )
}