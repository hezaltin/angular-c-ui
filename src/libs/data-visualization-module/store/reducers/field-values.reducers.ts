import * as fromFieldValues from '../actions/field-values.action';
//import {Products} from '../../models/product.model';


export interface FieldValuesState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:FieldValuesState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromFieldValues.FieldValuesAction):FieldValuesState{
    switch(action.type){
        case fromFieldValues.LOAD_FIELDVALUES:{
            return {
                ...state,
                loading:true
            }
        }
        case fromFieldValues.LOAD_FIELDVALUES_SUCCESS:{
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
        case fromFieldValues.LOAD_FIELDVALUES_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getFieldValuesEntites = (state:FieldValuesState) => state.entites.terms;
export const getFieldValuesLoading = (state:FieldValuesState) => state.loading;
export const getFieldValuesLoaded = (state:FieldValuesState) => state.loaded;
