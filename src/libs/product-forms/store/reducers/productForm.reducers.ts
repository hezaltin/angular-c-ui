import * as fromProductForm from '../actions/productForm.action';
//import {Products} from '../../models/product.model';


export interface ProductFormState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:ProductFormState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromProductForm.ProductFormAction):ProductFormState{
    switch(action.type){
        case fromProductForm.LOAD_PRODUCT_FORM:{
            return {
                ...state,
                loading:true
            }
        }
        case fromProductForm.LOAD_PRODUCT_FORM_SUCCESS:{
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
        case fromProductForm.LOAD_PRODUCT_FORM_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductFormEntites = (state:ProductFormState) => state.entites;
export const getProductFormLoading = (state:ProductFormState) => state.loading;
export const getProductFormLoaded = (state:ProductFormState) => state.loaded;
