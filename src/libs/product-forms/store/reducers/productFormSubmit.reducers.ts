
import * as fromProductForm from '../actions/productFromSubmit.action';
//import {Products} from '../../models/product.model';


export interface ProductFormSubmitState{
    entites:any,
    loaded:boolean,
    loading:boolean,
    assesments:any
}

export const initialState:ProductFormSubmitState ={
    entites:{},
    loaded:false,
    loading:false,
    assesments:{}
}


export function reducers(state=initialState,action:fromProductForm.ProductFormSubmitAction):ProductFormSubmitState{
    switch(action.type){
        case fromProductForm.LOAD_TECH_COMPLIANCE_ASSESMENT:{
            console.log(action.payload)
            const product=action.payload
            const assesments= action.payload

            return {
                ...state,
                loading:true,
                assesments
            }
        }
        case fromProductForm.LOAD_PRODUCT_SUBMIT_FORM:{
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
        case fromProductForm.LOAD_PRODUCT_FORM_SUBMIT_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductFormSubmitEntites = (state:ProductFormSubmitState) => state.entites;
export const getProductAssesments = (state:ProductFormSubmitState) => state.assesments;
export const getProductFormSubmitLoading = (state:ProductFormSubmitState) => state.loading;
export const getProductFormSubmitLoaded = (state:ProductFormSubmitState) => state.loaded;
