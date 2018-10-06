import * as fromRawMaterials from '../actions/rawMaterials.action';
//import {Products} from '../../models/product.model';


export interface RawMaterialsState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:RawMaterialsState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromRawMaterials.RawMaterialsAction):RawMaterialsState{
    switch(action.type){
        case fromRawMaterials.LOAD_RAWMATERIALS:{
            return {
                ...state,
                loading:true
            }
        }
        case fromRawMaterials.LOAD_RAWMATERIALS_SUCCESS:{
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
        case fromRawMaterials.LOAD_RAWMATERIALS_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductEntites = (state:RawMaterialsState) => state.entites;
export const getProductLoading = (state:RawMaterialsState) => state.loading;
export const getProductLoaded = (state:RawMaterialsState) => state.loaded;
