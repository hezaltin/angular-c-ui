import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromProductForm from '../reducers/productForm.reducers';
//import {Products} from '../../models/product.model';

export const getProductFrom = createSelector(fromFeature.getProductFormState, (state:fromProductForm.ProductFormState)=>state);

export const getProductFormEntites= createSelector(getProductFrom,fromProductForm.getProductFormEntites);