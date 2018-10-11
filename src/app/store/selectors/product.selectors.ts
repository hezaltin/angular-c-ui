import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromProduct from '../reducers/product.reducers';
//import {Products} from '../../models/product.model';

// export const getProduct = createSelector(fromFeature.getProductState, (state:fromProduct.ProductState)=>state);

export const getProductEntites= createSelector(fromFeature.getProductState,fromProduct.getProductEntites);

