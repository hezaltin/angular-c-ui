import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromProduct from '../reducers/product.reducers';
import * as fromProductForm from '../reducers/productForm.reducers';
import * as fromRawMaterials from '../reducers/rawMaterials.reducers';
import * as fromProductFormSubmit from '../reducers/productFormSubmit.reducers';


export interface ProductState{
    product:fromProduct.ProductState
    productForm:fromProductForm.ProductFormState,
    rawMaterials:fromRawMaterials.RawMaterialsState,
    productFormSubmit : fromProductFormSubmit.ProductFormSubmitState
}


export const reducers:ActionReducerMap<ProductState> = {
    product: fromProduct.reducers,
    productForm:fromProductForm.reducers,
    rawMaterials:fromRawMaterials.reducers,
    productFormSubmit:fromProductFormSubmit.reducers

}

export const getProductStateFeature = createFeatureSelector<ProductState>('products');

// export const getProductState = (state: ProductState) => state.product;
// export const getProductFormState = (state: ProductState) => state.productForm;
// export const getRawMaterialsState = (state:ProductState) => state.rawMaterials;

export const getProductState = createSelector(getProductStateFeature,(state:ProductState)=>state.product);
export const getProductFormState = createSelector(getProductStateFeature,(state:ProductState)=>state.productForm);
export const getRawMaterialsState = createSelector(getProductStateFeature,(state:ProductState)=>state.rawMaterials);
export const getProductFormSubmitState = createSelector(getProductStateFeature,(state:ProductState)=>state.productFormSubmit);
