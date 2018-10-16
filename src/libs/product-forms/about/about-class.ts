
export class SmartComplainceClass {
    constructor(
      public product: string,
      public productStrain: string,
      public enzymeActivity: string,
      public rawMaterial: any,
      public formulationIngerident: any,
      public manufacturingSite: any,
      public endUse: string
    ) {
  
    }
  }
  
  export interface Country {
    code: string
    name: string
    region: string
  }
  
  export interface EndUse {
    name: string
    jurisdiction: string
  }
  
  export interface EnzymeActivity {
    ec: string
    name: string
  }
  
  export interface Ingredient {
    name: string
    productBulkCode?: string
    cas: string
    concentration: number
    ingredientFunction: string
  }
  
  export interface ManufacturingSite {
    name: string
    country: string
    process: string
  }
  
  export interface Producer {
    duns: string
    name: string
    address: string
    country: string
  }
  
  export interface ProductionStrain {
    productBuildCode?: string
    gicc: string
    geneticallyEngineered: boolean
  }
  
  export interface RawMaterial {
    name: string
    productBulkCode?: string
    cas: string
    producer: Producer
  }
  
  export interface Product {
    bulkCode: string
    productionStrains: ProductionStrain[]
    enzymeActivity: EnzymeActivity
    rawMaterials: RawMaterial[]
    ingredients: Ingredient[]
    manufacturingSites: ManufacturingSite[]
    endUses: EndUse[]
    country: Country
  }