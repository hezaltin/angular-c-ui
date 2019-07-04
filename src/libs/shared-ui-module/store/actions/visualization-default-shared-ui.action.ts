import {Action} from '@ngrx/store';


export const LOAD_VISUAL_SHAREDUI = '[VisualizationSharedUi] Load visual';
export const LOAD_VISUAL_SUCCESS_SHAREDUI = '[VisualizationSharedUi] Load visual Success';
export const LOAD_VISUAL_FAIL_SHAREDUI = '[VisualizationSharedUi] Load visual Fail';



export class LoadVisualSharedUi implements Action{
    readonly type= LOAD_VISUAL_SHAREDUI;
    constructor(){}
}

export class LoadVisualSuccessSharedUi implements Action{
        readonly type= LOAD_VISUAL_SUCCESS_SHAREDUI;
        constructor(public payload:any){}
}

export class LoadVisualFailSharedUi implements Action{
    readonly type= LOAD_VISUAL_FAIL_SHAREDUI;
    constructor(public payload:any){}
}


export type VisualAction = LoadVisualSharedUi | LoadVisualSuccessSharedUi | LoadVisualFailSharedUi;