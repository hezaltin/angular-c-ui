import { Validators, FormArray } from "@angular/forms";

export const productionStrainOptionsGe = [
    { text: 'GE', value: 'true' },
    { text: 'Non-GE', value: 'false' }
  ];

export const enzymeActivity = [
    { ec: '1.1.9.1', name: '1.1.9.1 alcohol dehydrogenase (azurin)' },
    { ec: '4.2.1.1', name: '4.2.1.1 carbonic anhydrase' },
    { ec: '4.2.1.30', name: '4.2.1.30 glycerol dehydratase' }
  ];

export const rawSupplier = [
    { text: 'Air Product', value: 10, address: 'Pennsylvania', country: 'US' },
    { text: 'BASF', value:20, address: 'Ludwigshafen', country: 'DE' },
    { text: 'Chemours', value:30, address: 'Delaware', country: 'US' },
    { text: 'Dow Chemical', value:40, address: 'Michigan', country: 'US' },
  ];

export const countryStateList =[{
  uri:"http://www.dupont.com/ontology/ontoPSR-product/Country_US",
  code: "us",
  name: "United States",
  region: "US"
},
{
  uri:"http://www.dupont.com/ontology/ontoPSR-product/Country_CA",
  code: "ca",
  name: "Canada",
  region: "CA"
}
]

export const formPercentage = [0.1, 0.2, 0.5, 0.8];
export const formFunction = ['Preservative', 'Biocide', 'Medium'];

export const formManufactureStep = ["Fermentation", "Blending", "Final Product Packing"];

export const resetSmartCompliance= {
        strainGicc:'',
        strainGe:0,
        enzymename:'',
        enzymeec:0,
        rawChem:'',
        rawSup:0,
        ingred:'',
        ingredPct:0,
        ingredFunc:0,
        siteIndex:'',
        siteStep:0
    }
export const productKeys = {
  productBulkCode :'bulkCode',
  productRawMaterials:'rawMaterials',
  productIngred:'ingred'
}


export class CustoumValidators extends Validators{
  static  customValidators(control:FormArray):Validators{
    console.log(control)
    return control.controls.length>0 ? false:true
  }
}