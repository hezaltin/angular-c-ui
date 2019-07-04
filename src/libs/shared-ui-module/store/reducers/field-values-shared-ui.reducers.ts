import * as fromFieldValues from '../actions/field-values-shared-ui.action';
//import {Products} from '../../models/product.model';


export interface FieldValuesSharedUiState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:FieldValuesSharedUiState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromFieldValues.FieldValuesAction):FieldValuesSharedUiState{
    switch(action.type){
        case fromFieldValues.LOAD_FIELDVALUES_SHAREDUI:{
            return {
                ...state,
                loading:true
            }
        }
        case fromFieldValues.LOAD_FIELDVALUES_SUCCESS_SHAREDUI:{
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
        case fromFieldValues.LOAD_FIELDVALUES_FAIL_SHAREDUI:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getFieldValuesSharedUiEntites = (state:FieldValuesSharedUiState) => state.entites.terms;
export const getFieldValuesSharedUiLoading = (state:FieldValuesSharedUiState) => state.loading;
export const getFieldValuesSharedUiLoaded = (state:FieldValuesSharedUiState) => state.loaded;
