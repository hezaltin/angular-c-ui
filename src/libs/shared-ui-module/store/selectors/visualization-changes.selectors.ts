import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromVisualChanges from '../reducers/visualization-changes.reducers';
//import {Products} from '../../models/product.model';


export const getVisualChangesEntites= createSelector(fromFeature.getVisualChangesStateReducer,fromVisualChanges.getVisualChangesEntites);

