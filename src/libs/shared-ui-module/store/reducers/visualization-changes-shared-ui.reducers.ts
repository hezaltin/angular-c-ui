import * as fromVisualChanges from '../actions/visualization-changes-shared-ui.action';
//import {Products} from '../../models/product.model';


export interface VisualChangesSharedUiState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:VisualChangesSharedUiState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromVisualChanges.VisualChangesAction):VisualChangesSharedUiState{
    switch(action.type){
        case fromVisualChanges.LOAD_VISUALCHANGES_SHAREDUI:{
            return {
                ...state,
                loading:true
            }
        }
        case fromVisualChanges.LOAD_VISUALCHANGES_SUCCESS_SHAREDUI:{
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
        case fromVisualChanges.LOAD_VISUALCHANGES_FAIL_SHAREDUI:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getVisualChangesSharedUiEntites = (state:VisualChangesSharedUiState) => state.entites.terms;
export const getVisualChangesSharedUiLoading = (state:VisualChangesSharedUiState) => state.loading;
export const getVisualChangesSharedUiLoaded = (state:VisualChangesSharedUiState) => state.loaded;
