import {Action} from '@ngrx/store';


export const LOAD_VISUALCHANGES_SHAREDUI = '[VisualChangesSharedUi] Load VisualChanges';
export const LOAD_VISUALCHANGES_SUCCESS_SHAREDUI = '[VisualChangesSharedUi] Load VisualChanges Success';
export const LOAD_VISUALCHANGES_FAIL_SHAREDUI = '[VisualChangesSharedUi] Load VisualChanges Fail';



export class LoadVisualChangesSharedUi implements Action{
    readonly type= LOAD_VISUALCHANGES_SHAREDUI;
    constructor(public payload:any){}
}

export class LoadVisualChangesSuccessSharedUi implements Action{
        readonly type= LOAD_VISUALCHANGES_SUCCESS_SHAREDUI;
        constructor(public payload:any){}
}

export class LoadVisualChangesFailSharedUi implements Action{
    readonly type= LOAD_VISUALCHANGES_FAIL_SHAREDUI;
    constructor(public payload:any){}
}


export type VisualChangesAction = LoadVisualChangesSharedUi | LoadVisualChangesSuccessSharedUi | LoadVisualChangesFailSharedUi;