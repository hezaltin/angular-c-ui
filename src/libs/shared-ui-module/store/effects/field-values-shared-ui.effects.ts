import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as FieldValuesAction from '../actions/field-values-shared-ui.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationSharedUiService} from '../../services/shared-ui.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class FieldValuesEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationSharedUiService){}

    @Effect()
    loadVisual$ = this.action$.ofType(FieldValuesAction.LOAD_FIELDVALUES_SHAREDUI)
        .pipe(
            switchMap((action:FieldValuesAction.LoadFieldValuesSharedUi)=> {
                return this.fromService.filterSearchDetails(action.payload).pipe(map((item)=>new FieldValuesAction.LoadFieldValuesSuccessSharedUi(item)),
                catchError(error=>of(new FieldValuesAction.LoadFieldValuesFailSharedUi(error)))
            )})
        )
}