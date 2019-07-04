import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromFieldValuesSharedUi from '../reducers/field-values-shared-ui.reducers';
//import {Products} from '../../models/product.model';


export const getFieldValuesSharedUiSelectorEntites= createSelector(fromFeature.getVisualStateReducer,fromFieldValuesSharedUi.getFieldValuesSharedUiEntites);

