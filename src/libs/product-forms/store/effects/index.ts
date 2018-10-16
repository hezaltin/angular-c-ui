import {ProductEffects} from './product.effects';
import {ProductFormEffects} from './productForm.effects';
import {RawMaterialsEffects} from './rawMaterials.effects';

export const effects :any[] = [ProductEffects,ProductFormEffects,RawMaterialsEffects];

export * from './product.effects';
export * from './productForm.effects';
export * from './rawMaterials.effects';