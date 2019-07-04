import * as fromVisual from '../actions/visualization-default-shared-ui.action';
//import {Products} from '../../models/product.model';


export interface VisualSharedUiState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:VisualSharedUiState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromVisual.VisualAction):VisualSharedUiState{
    switch(action.type){
        case fromVisual.LOAD_VISUAL_SHAREDUI:{
            return {
                ...state,
                loading:true
            }
        }
        case fromVisual.LOAD_VISUAL_SUCCESS_SHAREDUI:{
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
        case fromVisual.LOAD_VISUAL_FAIL_SHAREDUI:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getVisualSharedUiEntites = (state:VisualSharedUiState) => state.entites.terms;
export const getVisualSharedUiLoading = (state:VisualSharedUiState) => state.loading;
export const getVisualSharedUiLoaded = (state:VisualSharedUiState) => state.loaded;
