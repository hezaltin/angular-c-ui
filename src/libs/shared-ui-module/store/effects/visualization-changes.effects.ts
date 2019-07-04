import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as VisualChangesAction from '../actions/visualization-changes.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationService} from '../../services/data-visualization.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class VisualChangesEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationService){}

    @Effect()
    loadVisual$ = this.action$.ofType(VisualChangesAction.LOAD_VISUALCHANGES)
        .pipe(
            switchMap((action:VisualChangesAction.LoadVisualChanges)=> {
                return this.fromService.getSearchDataVisualization(action.payload).pipe(map((item)=>new VisualChangesAction.LoadVisualChangesSuccess(item)),
                catchError(error=>of(new VisualChangesAction.LoadVisualChangesFail(error)))
            )})
        )
}