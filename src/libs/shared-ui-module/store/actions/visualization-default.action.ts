import {Action} from '@ngrx/store';


export const LOAD_VISUAL = '[Visualization] Load visual';
export const LOAD_VISUAL_SUCCESS = '[Visualization] Load visual Success';
export const LOAD_VISUAL_FAIL = '[Visualization] Load visual Fail';



export class LoadVisual implements Action{
    readonly type= LOAD_VISUAL;
    constructor(){}
}

export class LoadVisualSuccess implements Action{
        readonly type= LOAD_VISUAL_SUCCESS;
        constructor(public payload:any){}
}

export class LoadVisualFail implements Action{
    readonly type= LOAD_VISUAL_FAIL;
    constructor(public payload:any){}
}


export type VisualAction = LoadVisual | LoadVisualSuccess | LoadVisualFail;