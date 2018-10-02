import {Action} from '@ngrx/store';


export const LOAD_PRODUCT_FORM = '[Product] Load Product Form';
export const LOAD_PRODUCT_FORM_SUCCESS = '[Product] Load Product Form Success';
export const LOAD_PRODUCT_FORM_FAIL = '[Product] Load Product Form Fail';



export class LoadProductForm implements Action{
    readonly type= LOAD_PRODUCT_FORM;
    constructor(public payload:any){}
}

export class LoadProductFormSuccess implements Action{
        readonly type= LOAD_PRODUCT_FORM_SUCCESS;
        constructor(public payload:any){}
}

export class LoadProductFormFail implements Action{
    readonly type= LOAD_PRODUCT_FORM_FAIL;
    constructor(public payload:any){}
}


export type ProductFormAction = LoadProductForm | LoadProductFormSuccess | LoadProductFormFail;