import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromVisuals from '../reducers/visualization-default.reducers';
import * as fromVisualsChanges from '../reducers/visualization-changes.reducers';
import * as fieldValues from '../reducers/field-values.reducers';


export interface VisualStateReducer{
    visual:fromVisuals.VisualState,
    visualChanges : fromVisualsChanges.VisualChangesState,
    fieldValues : fieldValues.FieldValuesState
   
}


export const reducers:ActionReducerMap<VisualStateReducer> = {
    visual: fromVisuals.reducers,
    visualChanges: fromVisualsChanges.reducers,
    fieldValues : fieldValues.reducers
}

export const getVisualStateReducerFeature = createFeatureSelector<VisualStateReducer>('sharedui');

export const getVisualStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateReducer)=>state.visual);
export const getVisualChangesStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateReducer)=>state.visualChanges);

export const getFieldValues = createSelector(getVisualStateReducerFeature,(state:VisualStateReducer)=>state.fieldValues);
