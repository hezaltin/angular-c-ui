import {ActionReducerMap, createFeatureSelector,createSelector} from '@ngrx/store';

import * as fromProduct from '../reducers/product.reducers';
import * as fromProductForm from '../reducers/productForm.reducers';
import * as fromRawMaterials from '../reducers/rawMaterials.reducers'


export interface ProductState{
    product:fromProduct.ProductState
    productForm:fromProductForm.ProductFormState,
    rawMaterials:fromRawMaterials.RawMaterialsState
}


export const reducers:ActionReducerMap<ProductState> = {
    product: fromProduct.reducers,
    productForm:fromProductForm.reducers,
    rawMaterials:fromRawMaterials.reducers

}

//export const getProductState = createFeatureSelector<ProductState>('product');

export const getProductState = (state: ProductState) => state.product;
export const getProductFormState = (state: ProductState) => state.productForm;
export const getRawMaterialsState = (state:ProductState) => state.rawMaterials;

//export const getProductStateSelector = createSelector(getProductState,(state:fromProduct.ProductState)=>state);
