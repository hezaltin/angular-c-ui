import * as fromProduct from '../actions/product.action';
//import {Products} from '../../models/product.model';


export interface ProductState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:ProductState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromProduct.ProductAction):ProductState{
    switch(action.type){
        case fromProduct.LOAD_PRODUCT:{
            return {
                ...state,
                loading:true
            }
        }
        case fromProduct.LOAD_PRODUCT_SUCCESS:{
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
        case fromProduct.LOAD_PRODUCT_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductEntites = (state:ProductState) => state.entites;
export const getProductLoading = (state:ProductState) => state.loading;
export const getProductLoaded = (state:ProductState) => state.loaded;
