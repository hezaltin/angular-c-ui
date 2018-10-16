
import {Params, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';

// type check for the State Object
export interface RouterStateUrl{
    url:string;
    queryParams:Params;
    params: Params
}

export interface State{
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers :ActionReducerMap<State>= {
    routerReducer: fromRouter.routerReducer,
}
// Creat the rootReducer Object
export const getRouterState = createFeatureSelector<
    fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');

export const getCollectionNameState = createFeatureSelector<any>('collections');


// create the custo serializer to get the Route parameters and form the new objec; this calss will call whenever the route changes

export class CustoumSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot):RouterStateUrl{
        console.log(routerState)
        const {url} =routerState;

        const {queryParams} = routerState.root;

        let state:ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild){
            state = state.firstChild
        }
        const {params} = state;
        console.log(queryParams)
        return {url,queryParams,params};
    }

}