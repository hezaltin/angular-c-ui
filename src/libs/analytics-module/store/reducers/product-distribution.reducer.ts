import * as fromProductDistribution from '../actions/product-distribution.action';
//import {Products} from '../../models/product.model';


export interface ProductDistributionState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:ProductDistributionState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromProductDistribution.ProductDistributionAction):ProductDistributionState{
    switch(action.type){
        case fromProductDistribution.LOAD_PRODUCT_DISTRIBUTION:{
            return {
                ...state,
                loading:true
            }
        }
        case fromProductDistribution.LOAD_PRODUCT_DISTRIBUTION_SUCCESS:{
            console.log(action.payload)
            const product=action.payload
            const entites= Object.keys({...action.payload}).reduce((entites,productkey:any)=>{
                return {...entites,[productkey]:product[productkey]}
            },{...state.entites});

            return {
                ...state,
                loading:false,
                entites
            }
        }
        case fromProductDistribution.LOAD_PRODUCT_DISTRIBUTION_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductDistributionEntites = (state:ProductDistributionState) => state.entites.terms;
export const getProductDistributionLoading = (state:ProductDistributionState) => state.loading;
export const getProductDistributionLoaded = (state:ProductDistributionState) => state.loaded;
