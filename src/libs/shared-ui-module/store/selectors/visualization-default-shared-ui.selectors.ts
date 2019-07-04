import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromVisualSharedUi from '../reducers/visualization-default-shared-ui.reducers';
//import {Products} from '../../models/product.model';


export const getVisualSharedUiSelectorEntites= createSelector(fromFeature.getVisualStateReducer,fromVisualSharedUi.getVisualSharedUiEntites);

