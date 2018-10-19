import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as VisualAction from '../actions/visualization-default.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationService} from '../../services/data-visualization.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class VisualEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationService){}

    @Effect()
    loadVisual$ = this.action$.ofType(VisualAction.LOAD_VISUAL)
        .pipe(
            switchMap((action:VisualAction.LoadVisual)=> {
                return this.fromService.getDefaultDataVisualization().pipe(map((item)=>new VisualAction.LoadVisualSuccess(item)),
                catchError(error=>of(new VisualAction.LoadVisualFail(error)))
            )})
        )
}