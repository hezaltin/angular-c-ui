import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromProduct from '../reducers/product.reducers';
import * as fromProductForm from '../reducers/productForm.reducers';


export interface ProductState{
    product:fromProduct.ProductState
    productForm:fromProductForm.ProductFormState
}


export const reducers:ActionReducerMap<ProductState> = {
    product: fromProduct.reducers,
    productForm:fromProductForm.reducers

}

export const getProductState = createFeatureSelector<ProductState>('product');

//export const getProductStateSelector = createSelector(getProductState,(state:ProductState)=>state.product);
