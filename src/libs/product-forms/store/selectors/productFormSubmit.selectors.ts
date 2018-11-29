import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromProductSubmit from '../reducers/productFormSubmit.reducers';
//import {Products} from '../../models/product.model';

// export const getProduct = createSelector(fromFeature.getProductState, (state:fromProduct.ProductState)=>state);

export const getProductFormSubmitEntites= createSelector(fromFeature.getProductFormSubmitState,fromProductSubmit.getProductFormSubmitEntites);
export const getProductFormAssessments= createSelector(fromFeature.getProductFormSubmitState,fromProductSubmit.getProductAssesments);

