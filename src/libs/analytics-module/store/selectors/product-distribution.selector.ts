import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromProductDistribution from '../reducers/product-distribution.reducer';
//import {Products} from '../../models/product.model';


export const getFieldValuesEntites= createSelector(fromFeature.getProductDistributionAnalytics,fromProductDistribution.getProductDistributionEntites);

