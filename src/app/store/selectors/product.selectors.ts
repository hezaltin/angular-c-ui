import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromProduct from '../reducers/product.reducers';
//import {Products} from '../../models/product.model';

export const getProduct = createSelector(fromFeature.getProductState, (state:fromFeature.ProductState)=>state.product);

export const getProductEntites= createSelector(getProduct,fromProduct.getProductEntites);