import * as fromVisual from '../actions/visualization-default.action';
//import {Products} from '../../models/product.model';


export interface VisualState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:VisualState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromVisual.VisualAction):VisualState{
    switch(action.type){
        case fromVisual.LOAD_VISUAL:{
            return {
                ...state,
                loading:true
            }
        }
        case fromVisual.LOAD_VISUAL_SUCCESS:{
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
        case fromVisual.LOAD_VISUAL_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getVisualEntites = (state:VisualState) => state.entites.terms;
export const getVisualLoading = (state:VisualState) => state.loading;
export const getVisualLoaded = (state:VisualState) => state.loaded;
