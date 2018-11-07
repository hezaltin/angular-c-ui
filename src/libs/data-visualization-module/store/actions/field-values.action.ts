import {Action} from '@ngrx/store';


export const LOAD_FIELDVALUES = '[FieldValues] Load FieldValues';
export const LOAD_FIELDVALUES_SUCCESS = '[FieldValues] Load FieldValues Success';
export const LOAD_FIELDVALUES_FAIL = '[FieldValues] Load FieldValues Fail';



export class LoadFieldValues implements Action{
    readonly type= LOAD_FIELDVALUES;
    constructor(public payload:any){}
}

export class LoadFieldValuesSuccess implements Action{
        readonly type= LOAD_FIELDVALUES_SUCCESS;
        constructor(public payload:any){}
}

export class LoadFieldValuesFail implements Action{
    readonly type= LOAD_FIELDVALUES_FAIL;
    constructor(public payload:any){}
}


export type FieldValuesAction = LoadFieldValues | LoadFieldValuesSuccess | LoadFieldValuesFail;