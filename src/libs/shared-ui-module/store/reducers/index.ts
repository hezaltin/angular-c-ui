import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromVisuals from './visualization-default-shared-ui.reducers';
import * as fromVisualsChanges from './visualization-changes-shared-ui.reducers';
import * as fieldValues from './field-values-shared-ui.reducers';


export interface VisualStateSharedUiReducer{
    visualSharedUi:fromVisuals.VisualSharedUiState,
    visualChangesSharedUi : fromVisualsChanges.VisualChangesSharedUiState,
    fieldValuesSharedUi : fieldValues.FieldValuesSharedUiState
   
}


export const reducers:ActionReducerMap<VisualStateSharedUiReducer> = {
    visualSharedUi: fromVisuals.reducers,
    visualChangesSharedUi: fromVisualsChanges.reducers,
    fieldValuesSharedUi : fieldValues.reducers
}

export const getVisualStateReducerFeature = createFeatureSelector<VisualStateSharedUiReducer>('sharedui');

export const getVisualStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateSharedUiReducer)=>state.visualSharedUi);
export const getVisualChangesStateReducer = createSelector(getVisualStateReducerFeature,(state:VisualStateSharedUiReducer)=>state.visualChangesSharedUi);

export const getFieldValues = createSelector(getVisualStateReducerFeature,(state:VisualStateSharedUiReducer)=>state.fieldValuesSharedUi);
