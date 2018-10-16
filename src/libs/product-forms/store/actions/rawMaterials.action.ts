import {Action} from '@ngrx/store';


export const LOAD_RAWMATERIALS = '[RawMaterials] Load RawMaterials';
export const LOAD_RAWMATERIALS_SUCCESS = '[RawMaterials] Load RawMaterials Success';
export const LOAD_RAWMATERIALS_FAIL = '[RawMaterials] Load RawMaterials Fail';



export class LoadRawMaterials implements Action{
    readonly type= LOAD_RAWMATERIALS;
    constructor(public payload:any){}
}

export class LoadRawMaterialsSuccess implements Action{
        readonly type= LOAD_RAWMATERIALS_SUCCESS;
        constructor(public payload:any){}
}

export class LoadRawMaterialsFail implements Action{
    readonly type= LOAD_RAWMATERIALS_FAIL;
    constructor(public payload:any){}
}


export type RawMaterialsAction = LoadRawMaterials | LoadRawMaterialsSuccess | LoadRawMaterialsFail;