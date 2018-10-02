import {Action} from '@ngrx/store';


export const LOAD_PRODUCT = '[Product] Load Product';
export const LOAD_PRODUCT_SUCCESS = '[Product] Load Product Success';
export const LOAD_PRODUCT_FAIL = '[Product] Load Product Fail';



export class LoadProduct implements Action{
    readonly type= LOAD_PRODUCT;
    constructor(public payload:any){}
}

export class LoadProductSuccess implements Action{
        readonly type= LOAD_PRODUCT_SUCCESS;
        constructor(public payload:any){}
}

export class LoadProductFail implements Action{
    readonly type= LOAD_PRODUCT_FAIL;
    constructor(public payload:any){}
}


export type ProductAction = LoadProduct | LoadProductSuccess | LoadProductFail;