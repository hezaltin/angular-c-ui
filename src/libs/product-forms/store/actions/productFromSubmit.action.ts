import {Action} from '@ngrx/store';


export const LOAD_PRODUCT_SUBMIT_FORM = '[Product] Load Product Form Submit';
export const LOAD_PRODUCT_FORM_SUBMIT_SUCCESS = '[Product] Load Product Form Submit Success';
export const LOAD_PRODUCT_FORM_SUBMIT_FAIL = '[Product] Load Product Form Submit Fail';



export class LoadProductFormSubmit implements Action{
    readonly type= LOAD_PRODUCT_SUBMIT_FORM;
    constructor(public payload:any){}
}

export class LoadProductFormSubmitSuccess implements Action{
        readonly type= LOAD_PRODUCT_FORM_SUBMIT_SUCCESS;
        constructor(public payload:any){}
}

export class LoadProductFormSubmitFail implements Action{
    readonly type= LOAD_PRODUCT_FORM_SUBMIT_FAIL;
    constructor(public payload:any){}
}


export type ProductFormSubmitAction = LoadProductFormSubmit | LoadProductFormSubmitSuccess | LoadProductFormSubmitFail;