import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as VisualAction from '../actions/visualization-default-shared-ui.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationSharedUiService} from '../../services/shared-ui.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class VisualEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationSharedUiService){}

    @Effect()
    loadVisual$ = this.action$.ofType(VisualAction.LOAD_VISUAL_SHAREDUI)
        .pipe(
            switchMap((action:VisualAction.LoadVisualSharedUi)=> {
                return this.fromService.getDefaultDataVisualization().pipe(map((item)=>new VisualAction.LoadVisualSuccessSharedUi(item)),
                catchError(error=>of(new VisualAction.LoadVisualFailSharedUi(error)))
            )})
        )
}