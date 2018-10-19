import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromVisuals from '../reducers/visualization-default.reducers';
import * as fromVisualsChanges from '../reducers/visualization-changes.reducers';


export interface VisualStateReducer{
    visual:fromVisuals.VisualState,
    visualChanges : fromVisualsChanges.VisualChangesState
   
}


export const reducers:ActionReducerMap<VisualStateReducer> = {
    visual: fromVisuals.reducers,
    visualChanges: fromVisualsChanges.reducers
}

export const getVisualStateReducerFeature = createFeatureSelector<VisualStateReducer>('visuals');

export const getVisualStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateReducer)=>state.visual);
export const getVisualChangesStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateReducer)=>state.visualChanges);
