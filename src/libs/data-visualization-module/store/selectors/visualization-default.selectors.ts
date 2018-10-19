import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromVisual from '../reducers/visualization-default.reducers';
//import {Products} from '../../models/product.model';


export const getVisualEntites= createSelector(fromFeature.getVisualStateReducer,fromVisual.getVisualEntites);

