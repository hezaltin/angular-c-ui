import { Component, OnInit, ChangeDetectorRef,ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ClarityIcons } from '@clr/icons';
//import { SmartCompliance } from '../models/smart-compliance';
import { SmartComplainceClass, Product, ProductionStrain } from './about-class';
import { Router } from '@angular/router';
import { SmartComplainceService } from '../services/smart-complaince.service';
import { Observable } from 'rxjs';
import { debounceTime, map,switchMap,delay } from 'rxjs/operators';
import "rxjs/add/operator/do";
import {productionStrainOptionsGe,enzymeActivity,rawSupplier,formPercentage,formFunction,formManufactureStep,resetSmartCompliance} from './smart-complaince.config'
//import { shouldCallLifecycleInitHook } from '@angular/core/src/view';


@Component({
  selector: 'app-smart-complaince',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class AboutComponent implements OnInit {
  public rawSupplier: any = Object.assign([],rawSupplier);
  public formPercentage: any = Object.assign([],formPercentage);
  public formFunction: any = Object.assign([],formFunction);
  public formCountryName: any = [];
  public formManufactureStep: any = Object.assign([],formManufactureStep);
  public enzymeActivityControl: any = Object.assign([],enzymeActivity)
  productionStrainOptionsGe: any[] = Object.assign([],productionStrainOptionsGe);
  productCodeList$:Observable<any>;
  rawMaterialList$:Observable<any>
  ingredientsList$:Observable<any>
  filterProductSub:any;
  focusedControl:string;
  blurControl:boolean
  opendValue:boolean= false;

  productForm:any;
 
  formSubmit: boolean = false;
  productAssesment:any;

  constructor(
    public router: Router,
    public smartService: SmartComplainceService,
    private fb: FormBuilder,
    private cd: ChangeDetectorRef,
    private ElementRef:ElementRef
  ) { }

  ngOnInit() {
    this.productForm=this.createProductForm()
    this.formCountryName = ['United States', 'Canada'];
    this.productCodeList$ = this.productCodeList;
    this.rawMaterialList$ = this.rawMaterialList;
    this.ingredientsList$ = this.ingredientsList;
   
  }

  get productCode(){
    return this.productForm.get('bulkCode') as FormControl
  }

  get productCodeList(){
      return this.productCode.valueChanges.pipe(
        debounceTime(100),
        switchMap(value =>this.smartService.getSearchProduct({name: value}))
       )
  }

  get rawMaterialName(){
    return this.productForm.controls.formbinding.get('rawChem') as FormControl
  }

  get rawMaterialList(){
  return  this.rawMaterialName.valueChanges.pipe(
      debounceTime(100),
      switchMap(value =>this.smartService.getSearchRawMaterials({name: value}))
     )
  }

  get ingredientsName(){
    return this.productForm.controls.formbinding.get('ingred') as FormControl
  }

  get ingredientsList(){
  return  this.ingredientsName.valueChanges.pipe(
      debounceTime(100),
      switchMap(value =>this.smartService.getSearchRawMaterials({name: value}))
     )
  }

  focusField(name){
    console.log('FocusedFields')
        this.focusedControl= name;
         this.blurControl=false
        //this.cd.detectChanges();
  }
  onClick(event){
    console.log(event)
    if(event.target.tagName!=='INPUT'){
      this.blurControl=true
    }

  }
  
  formBindingMapping(formBind){
    this.productForm.controls.formbinding.setValue({
      'strainGicc':formBind.productionStrains[0].gicc,
      'strainGe': formBind.productionStrains[0].geneticallyEngineered,
      'enzymename': formBind.enzymeActivity[0].name,
      'enzymeec': formBind.enzymeActivity[0].ec,
      'rawChem':  formBind.rawMaterials[0].name,
      'rawSup': 10,
      'ingred': formBind.ingredients[0].name,
      'ingredPct':  formBind.ingredients[0].concentration,
      'ingredFunc': formBind.ingredients[0].ingredientFunction,
      'siteIndex':  formBind.manufacturingSites[0].name,
      'siteStep': formBind.manufacturingSites[0].process
    });
  }

  mappedValue(array,key){
       this.resetValue(key)
        array.map((item)=>{
            this.productForm.controls[key].push(this.fb.control(item));
        })
  }

  resetValue(key){
    const control = <FormArray>this.productForm.controls[key];
    for(let i = control.length-1; i >= 0; i--) {
      control.removeAt(i)
    }
  }

  get productionStrains() {
    return this.productForm.get('productionStrains') as FormArray
  }

  addProductionStrain(strain) {
    this.productionStrains.push(this.fb.control({
      uri: "http://www.dupont.com/ontology/ontoPSR-product/GICCTEST6_in_T00006_FRED",
      //productBulkCode: this.productForm.get('bulkCode').value,
      gicc: strain.gicc,
      geneticallyEngineered: strain.geneticallyEngineered,
    }))
  }

  removeProductionStrain(index) {
    this.productionStrains.removeAt(index)
  }

  get enzymeActivity() {
    return this.productForm.get('enzymeActivity') as FormArray
  }

  addEnzyme(enzymename){
    this.enzymeActivity.push(this.fb.control({
      uri: "http://www.dupont.com/ontology/ontoPSR-product/EndUse_Grain_Processing_Product",
      name: enzymename.name,
      jurisdiction: enzymename.ec,
    }))
  }

  removeEnzymeActivity(index) {
    this.enzymeActivity.removeAt(index)
  }

  get rawMaterials() {
    return this.productForm.get('rawMaterials') as FormArray
  }

  addRawMaterial(rawIndex) {
    let rawChem = rawIndex.rawChem;
    let getRawSupplier= this.rawSupplier.filter(supplier=> supplier.value== parseInt(rawIndex.rawSup));
    let rawSup = getRawSupplier.length===0 ? [] : Object.assign({},getRawSupplier[0]);
    this.rawMaterials.push(this.fb.control({
      name: rawChem,
      //productBulkCode: this.productForm.get('bulkCode').value,
      uri: "http://www.dupont.com/ontology/ontoPSR-product/CAS_110-44-1_for_T00006_FRED",
      cas: rawChem.value ? rawChem.value :"110-44-1",
      producer: {
        uri: "http://www.dupont.com/ontology/ontoPSR-product/DUNS_591348714",
        //duns: rawSup.value.toString(),
        duns:'591348714',
        name: rawSup.text,
        address: rawSup.address,
        country: rawSup.country
      }
    }))
  }

  removeRawMaterial(index) {
    this.rawMaterials.removeAt(index)
  }

  removeIngredients(index) {
    this.ingredients.removeAt(index)
  }

  get ingredients() {
    return this.productForm.get('ingredients') as FormArray
  }

  addIngredient(indIndex) {
    let ingred = (indIndex.ingredient);
    let concentration = parseFloat(indIndex.percentage)
    let ingredientFunction = indIndex.function;

    this.ingredients.push(this.fb.control({
      uri: "http://www.dupont.com/ontology/ontoPSR-product/CAS_7732-18-5_in_T00006_FRED",
      name: ingred,
      //productBulkCode: this.productForm.get('bulkCode').value,
      cas: "7732-18-5",
      concentration: concentration,
      ingredientFunction :ingredientFunction ,
    }))
  }

  removeIngredient(index) {
    this.ingredients.removeAt(index)
  }

  get manufacturingSites() {
    return this.productForm.get('manufacturingSites') as FormArray
  }

  addManufacturingSite(siteIndex) {
    this.manufacturingSites.push(this.fb.control({
      uri: "http://www.dupont.com/ontology/ontoPSR-product/Site_Beloit",
      name: siteIndex.siteIndex,
      country: 'US',
      process:siteIndex.siteStep
      
    }))
  }

  removeManufacturingSite(index) {
    this.manufacturingSites.removeAt(index)
  }

  complianceOnSubmit(productForm) {
    this.formSubmit = false;
      let productFormRequest = Object.keys(this.productForm.value).reduce(this.submitRequestBuild.bind(this),<Product>{});
    this.smartService.getSmartCompliance(productFormRequest).subscribe((smartres)=>{
       this.formSubmit = true;
       this.opendValue= true;
      this.productAssesment=smartres['assessment'];
    })
  }

  submitRequestBuild(responseBuild,currentProp){
    if(currentProp!=='formbinding'){
        responseBuild[currentProp]=this.productForm.value[currentProp];
    }
    return responseBuild;
}

formUpdate(event){
      console.log(event)
      
    //  this.productCodeList$= this.productCodeList$.do((val)=>val);
      this.blurControl = true;
      if(event.fieldName==="bulkCode"){
        this.productForm.get(event.fieldName).setValue(event.select.bulkCode);
        this.updateProductField(event)
      }
      else if(event.fieldName==="rawMaterials"){
        this.rawMaterialName.setValue(event.select.term);
      }
      else if(event.fieldName==="ingred"){
        this.ingredientsName.setValue(event.select.term);
      }
     
}

updateProductField(selectField){
  this.smartService.getProductDetails({name:this.productForm
    .get('bulkCode').value,internalProductName:selectField.internalProductName}).subscribe((next)=>{
        if(next.bulkCode){
            let {bulkCode,country,uri,endUses,externalProductName, internalProductName,...property} = next;
            Object.keys(property).map(item=> this.mappedValue(property[item],item));
            this.formBindingMapping(next);
        }
    })
}

updateFormBindingFields(){

}


  complianceOnReset(product) {
    let {bulkCode,country,uri,endUses, ...property} = product.controls;
    Object.keys(property).map(item=> this.resetValue(item));
    // this.productForm = this.fb.group({
    //   bulkCode: ['T1234'],
    //   productionStrains: this.fb.array([]),
    //   enzymeActivity: this.fb.array([]),
    //   rawMaterials: this.fb.array([]),
    //   ingredients: this.fb.array([]),
    //   manufacturingSites: this.fb.array([]),
    //   endUses: this.fb.array([
    //     this.fb.group({
    //       uri: "http://www.dupont.com/ontology/ontoPSR-product/CAS_110-44-1_for_T00006_FRED",
    //       name: ['Advanced Biofuels'],
    //       jurisdiction: ['Tech'],
    //     })
    //   ]),
    //   country: this.fb.group({
    //     code: ['us'],
    //     name: [0],
    //     region: ['NA'],
    //   }),
    //   formbinding:this.fb.group({
    //     strainGicc:[''],
    //     strainGe:[0],
    //     enzymename:[''],
    //     enzymeec:[0],
    //     rawChem:[''],
    //     rawSup:[0],
    //     ingred:[''],
    //     ingredPct:[0],
    //     ingredFunc:[0],
    //     siteIndex:[''],
    //     siteStep:[0],

    // }) 
    // })
  
  }

  createProductForm(){
       return this.fb.group({
        uri: "http://www.dupont.com/ontology/ontoPSR-product/T00006_FRED",
        bulkCode: ['T1234'],
        productionStrains: this.fb.array([]),
        enzymeActivity:this.fb.array([]), 
    
        rawMaterials: this.fb.array([]),
        ingredients: this.fb.array([]),
        manufacturingSites: this.fb.array([]),
        endUses: this.fb.array([
          this.fb.group({
            uri: "http://www.dupont.com/ontology/ontoPSR-product/EndUse_Grain_Processing_Product",
            name: ['Advanced Biofuels'],
            jurisdiction: ['Tech'],
          })
        ]),
        country: this.fb.group({
          uri: "http://www.dupont.com/ontology/ontoPSR-product/Country_US",
          code: ['us'],
          name: ['United States'],
          region: ['NA'],
        }),
        formbinding:this.fb.group({
            strainGicc:['Name'],
            strainGe:[productionStrainOptionsGe[0].value],
            enzymename:['Enzyme'],
            enzymeec:[enzymeActivity[0].ec],
            rawChem:['Raw Supplier'],
            rawSup:[rawSupplier[0].value],
            ingred:['Ingredients'],
            ingredPct:[formPercentage[0]],
            ingredFunc:[formFunction[0]],
            siteIndex:['Manufacturing Sites'],
            siteStep:[formManufactureStep[0]],
    
        }) 
      });
  }

}
