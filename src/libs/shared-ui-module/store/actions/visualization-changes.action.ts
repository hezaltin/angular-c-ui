import {Action} from '@ngrx/store';


export const LOAD_VISUALCHANGES = '[VisualChanges] Load VisualChanges';
export const LOAD_VISUALCHANGES_SUCCESS = '[VisualChanges] Load VisualChanges Success';
export const LOAD_VISUALCHANGES_FAIL = '[VisualChanges] Load VisualChanges Fail';



export class LoadVisualChanges implements Action{
    readonly type= LOAD_VISUALCHANGES;
    constructor(public payload:any){}
}

export class LoadVisualChangesSuccess implements Action{
        readonly type= LOAD_VISUALCHANGES_SUCCESS;
        constructor(public payload:any){}
}

export class LoadVisualChangesFail implements Action{
    readonly type= LOAD_VISUALCHANGES_FAIL;
    constructor(public payload:any){}
}


export type VisualChangesAction = LoadVisualChanges | LoadVisualChangesSuccess | LoadVisualChangesFail;