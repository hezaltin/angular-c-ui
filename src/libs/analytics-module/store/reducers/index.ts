import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromAnalytics from '../reducers/product-distribution.reducer';



export interface AnalyticsStateReducer{
    analytics:fromAnalytics.ProductDistributionState,

   
}


export const reducers:ActionReducerMap<AnalyticsStateReducer> = {
    analytics: fromAnalytics.reducers,
}

export const getAnalyticsStateReducerFeature = createFeatureSelector<AnalyticsStateReducer>('analytics');

export const getProductDistributionAnalytics = createSelector(getAnalyticsStateReducerFeature,(state:AnalyticsStateReducer)=>state.analytics);
