import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromFieldValues from '../reducers/field-values.reducers';
//import {Products} from '../../models/product.model';


export const getFieldValuesEntites= createSelector(fromFeature.getVisualStateReducer,fromFieldValues.getFieldValuesEntites);

