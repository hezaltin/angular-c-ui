import * as fromVisualChanges from '../actions/visualization-changes.action';
//import {Products} from '../../models/product.model';


export interface VisualChangesState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:VisualChangesState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromVisualChanges.VisualChangesAction):VisualChangesState{
    switch(action.type){
        case fromVisualChanges.LOAD_VISUALCHANGES:{
            return {
                ...state,
                loading:true
            }
        }
        case fromVisualChanges.LOAD_VISUALCHANGES_SUCCESS:{
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
        case fromVisualChanges.LOAD_VISUALCHANGES_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getVisualChangesEntites = (state:VisualChangesState) => state.entites.terms;
export const getVisualChangesLoading = (state:VisualChangesState) => state.loading;
export const getVisualChangesLoaded = (state:VisualChangesState) => state.loaded;
