import {createSelector} from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromRawMaterials from '../reducers/rawMaterials.reducers';
//import {Products} from '../../models/product.model';

//export const getRawMaterials = createSelector(fromFeature.getRawMaterialsState, (state:fromRawMaterials.RawMaterialsState)=>state);

export const getRawMaterialsEntites= createSelector(fromFeature.getRawMaterialsState,fromRawMaterials.getRawMaterialsEntites);