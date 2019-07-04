import {Action} from '@ngrx/store';


export const LOAD_FIELDVALUES_SHAREDUI = '[FieldValuesSharedUi] Load FieldValues';
export const LOAD_FIELDVALUES_SUCCESS_SHAREDUI = '[FieldValuesSharedUi] Load FieldValues Success';
export const LOAD_FIELDVALUES_FAIL_SHAREDUI = '[FieldValuesSharedUi] Load FieldValues Fail';



export class LoadFieldValuesSharedUi implements Action{
    readonly type= LOAD_FIELDVALUES_SHAREDUI;
    constructor(public payload:any){}
}

export class LoadFieldValuesSuccessSharedUi implements Action{
        readonly type= LOAD_FIELDVALUES_SUCCESS_SHAREDUI;
        constructor(public payload:any){}
}

export class LoadFieldValuesFailSharedUi implements Action{
    readonly type= LOAD_FIELDVALUES_FAIL_SHAREDUI;
    constructor(public payload:any){}
}


export type FieldValuesAction = LoadFieldValuesSharedUi | LoadFieldValuesSuccessSharedUi | LoadFieldValuesFailSharedUi;