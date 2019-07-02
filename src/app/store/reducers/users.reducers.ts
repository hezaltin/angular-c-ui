import * as fromUsers from '../actions/users.action';
//import {Products} from '../../models/product.model';


export interface UsersState{
    entites:any,
    loaded:boolean,
    loading:boolean
}

export const initialState:UsersState ={
    entites:{},
    loaded:false,
    loading:false
}

export function reducers(state=initialState,action:fromUsers.UsersAction):UsersState{
    switch(action.type){
        case fromUsers.LOAD_USERS:{
            return {
                ...state,
                loading:true
            }
        }
        case fromUsers.LOAD_USERS_SUCCESS:{
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
        case fromUsers.LOAD_USERS_FAIL:{
            return{
                ...state,
                loading:false
            }
        }
    }
    return state;
}

export const getProductEntites = (state:UsersState) => state.entites.terms;
export const getProductLoading = (state:UsersState) => state.loading;
export const getProductLoaded = (state:UsersState) => state.loaded;
