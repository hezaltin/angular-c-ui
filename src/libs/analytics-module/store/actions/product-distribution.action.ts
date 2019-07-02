import {Action} from '@ngrx/store';


export const LOAD_PRODUCT_DISTRIBUTION = '[ProductDistribution] Load ProductDistribution';
export const LOAD_PRODUCT_DISTRIBUTION_SUCCESS = '[ProductDistribution] Load ProductDistribution Success';
export const LOAD_PRODUCT_DISTRIBUTION_FAIL = '[ProductDistribution] Load ProductDistribution Fail';



export class LoadProductDistribution implements Action{
    readonly type= LOAD_PRODUCT_DISTRIBUTION;
    constructor(){}
}

export class LoadProductDistributionSuccess implements Action{
        readonly type= LOAD_PRODUCT_DISTRIBUTION_SUCCESS;
        constructor(public payload:any){}
}

export class LoadProductDistributionFail implements Action{
    readonly type= LOAD_PRODUCT_DISTRIBUTION_FAIL;
    constructor(public payload:any){}
}


export type ProductDistributionAction = LoadProductDistribution | LoadProductDistributionSuccess | LoadProductDistributionFail;