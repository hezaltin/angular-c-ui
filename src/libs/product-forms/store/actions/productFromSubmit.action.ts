import {Action} from '@ngrx/store';


export const LOAD_PRODUCT_SUBMIT_FORM = '[Product] Load Product Form Submit';
export const LOAD_TECH_COMPLIANCE_ASSESMENT = '[Product] Load Tech Compliance Assesment';
export const LOAD_PRODUCT_FORM_SUBMIT_FAIL = '[Product] Load Product Form Submit Fail';



export class LoadProductFormSubmit implements Action{
    readonly type= LOAD_PRODUCT_SUBMIT_FORM;
    constructor(public payload:any){}
}

export class LoadTechComplainceAssesment implements Action{
        readonly type= LOAD_TECH_COMPLIANCE_ASSESMENT;
        constructor(public payload:any){}
}

export class LoadProductFormSubmitFail implements Action{
    readonly type= LOAD_PRODUCT_FORM_SUBMIT_FAIL;
    constructor(public payload:any){}
}


export type ProductFormSubmitAction = LoadProductFormSubmit | LoadTechComplainceAssesment | LoadProductFormSubmitFail;