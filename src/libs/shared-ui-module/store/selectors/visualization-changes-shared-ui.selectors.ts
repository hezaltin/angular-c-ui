import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromVisualChangesSharedUi from '../reducers/visualization-changes-shared-ui.reducers';
//import {Products} from '../../models/product.model';


export const getVisualChangesSharedUiSelectorEntites= createSelector(fromFeature.getVisualChangesStateReducer,fromVisualChangesSharedUi.getVisualChangesSharedUiEntites);

