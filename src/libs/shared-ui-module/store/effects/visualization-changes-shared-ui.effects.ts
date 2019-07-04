import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as VisualChangesAction from '../actions/visualization-changes-shared-ui.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {DataVisualizationSharedUiService} from '../../services/shared-ui.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class VisualChangesEffects{
    constructor(private action$:Actions,private fromService:DataVisualizationSharedUiService){}

    @Effect()
    loadVisual$ = this.action$.ofType(VisualChangesAction.LOAD_VISUALCHANGES_SHAREDUI)
        .pipe(
            switchMap((action:VisualChangesAction.LoadVisualChangesSharedUi)=> {
                return this.fromService.getSearchDataVisualization(action.payload).pipe(map((item)=>new VisualChangesAction.LoadVisualChangesSuccessSharedUi(item)),
                catchError(error=>of(new VisualChangesAction.LoadVisualChangesFailSharedUi(error)))
            )})
        )
}