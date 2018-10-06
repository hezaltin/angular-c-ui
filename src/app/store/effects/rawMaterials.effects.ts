import {Injectable} from '@angular/core';
import {Effect,Actions} from '@ngrx/effects';

import * as RawMaterialsAction from '../actions/rawMaterials.action';
import { switchMap,map,catchError } from 'rxjs/operators';
import {SmartComplainceService} from '../../services/smart-complaince.service';
import {of} from 'rxjs/observable/of';

@Injectable()

export class RawMaterialsEffects{
    constructor(private action$:Actions,private fromService:SmartComplainceService){}

    @Effect()
    loadRawMaterials$ = this.action$.ofType(RawMaterialsAction.LOAD_RAWMATERIALS)
        .pipe(
            switchMap((action:RawMaterialsAction.LoadRawMaterials)=> {
                return this.fromService.getSearchRawMaterials(action.payload).pipe(map((item)=>new RawMaterialsAction.LoadRawMaterialsSuccess(item)),
                catchError(error=>of(new RawMaterialsAction.LoadRawMaterialsFail(error)))
            )})
        )
}