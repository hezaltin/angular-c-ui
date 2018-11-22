import {
    Component,
    OnInit,
    ChangeDetectorRef,
    ElementRef,
    state
} from "@angular/core";
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { ClarityIcons } from "@clr/icons";
import { Store } from "@ngrx/store";
//import { SmartCompliance } from '../models/smart-compliance';
import { SmartComplainceClass, Product, ProductionStrain } from "./about-class";
import { Router } from "@angular/router";
import { SmartComplainceService } from "../services/smart-complaince.service";
import { Observable } from "rxjs";
import { debounceTime, map, switchMap, delay, filter } from "rxjs/operators";
import "rxjs/add/operator/do";
import {
    productionStrainOptionsGe,
    enzymeActivity,
    rawSupplier,
    formPercentage,
    formFunction,
    formManufactureStep,
    resetSmartCompliance,
    productKeys
} from "./smart-complaince.config";
import * as fromStore from "../store";
import { ProductState } from "../store";

const keyCodes = { keyup: 38, keydown: 40, enter: 13 }

@Component({
    selector: "app-smart-complaince",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.scss"],
    host: {
        "(document:click)": "onClick($event)"
    }
})
export class AboutComponent implements OnInit {
    public rawSupplier: any = Object.assign([], rawSupplier);
    public formPercentage: any = Object.assign([], formPercentage);
    public formFunction: any = Object.assign([], formFunction);
    public formCountryName: any = [];
    public formManufactureStep: any = Object.assign([], formManufactureStep);
    public enzymeActivityControl: any = Object.assign([], enzymeActivity);
    productionStrainOptionsGe: any[] = Object.assign(
        [],
        productionStrainOptionsGe
    );
    productCodeList$: Observable<ProductState>;
    rawMaterialList$: Observable<ProductState>;
    ingredientsList$: Observable<ProductState>;
    productCodeListData: any
    focusedControl: string;
    blurControl: boolean;
    opendValue: boolean = false;
    productForm: any;
    formSubmit: boolean = false;
    productAssesment: any;
    formBindingObject: any = null;
    currentFocus: number = -1;
    currentFocusData: any;
    formUpdateValue: boolean = false;
    constructor(
        public router: Router,
        public smartService: SmartComplainceService,
        private fb: FormBuilder,
        private cd: ChangeDetectorRef,
        private ElementRef: ElementRef,
        private store: Store<fromStore.ProductState | ProductState>
    ) { }

    ngOnInit() {
        this.productForm = this.createProductForm();
        this.formCountryName = ["United States", "Canada"];
        this.productCodeList.subscribe(next => {
            this.setProductData('bulkCode');
            if(this.focusedControl==='bulkCode'){
                this.store.dispatch(new fromStore.LoadProduct({ name: next }))
            }
            
        });
        
        this.rawMaterialList.subscribe(next => {
                this.setProductData('rawMaterials');
                if(this.focusedControl==='rawMaterials'){
                    this.store.dispatch(new fromStore.LoadRawMaterials({ name: next }))
                }
        });
        this.ingredientsList.subscribe(next => {
            this.setProductData('ingred');
            if(this.focusedControl==='ingred'){
             this.store.dispatch(new fromStore.LoadRawMaterials({ name: next }));
            }
        });
        this.productCodeList$ = this.store.select(fromStore.getProductEntites);
        this.rawMaterialList$ = this.store.select(
            fromStore.getRawMaterialsEntites
        );
        this.ingredientsList$ = this.store.select(
            fromStore.getRawMaterialsEntites
        );
    }

    setProductData(productKey) {
        this.currentFocus = -1;
        if (this.focusedControl !== productKey || this.formUpdateValue ) {
            this.formUpdateValue = false
            return ;
        }
        this.blurControl = false;
    }
    // get the data for key down auto complete functionality
    getProductCodeListData() {
        let productData;
        this.productCodeList$.subscribe(productCode => productData = productCode)
        return { productData: productData, fieldName: 'bulkCode' };
    }
    getrawMaterialListData() {
        let productData;
        this.rawMaterialList$.subscribe(productCode => productData = productCode)
        return { productData: productData, fieldName: 'rawMaterials' };
    }
    getingredientsListData() {
        let productData;
        this.ingredientsList$.subscribe(productCode => productData = productCode)
        return { productData: productData, fieldName: 'ingred' };
    }

    get productCode() {
        return this.productForm.get("bulkCode") as FormControl;
    }

    get productCodeList() {
        return this.productCode.valueChanges.pipe(debounceTime(100));
    }

    get rawMaterialName() {
        return this.productForm.controls.formbinding.get(
            "rawChem"
        ) as FormControl;
    }

    get rawMaterialList() {
        return this.rawMaterialName.valueChanges.pipe(debounceTime(100));
    }

    get ingredientsName() {
        return this.productForm.controls.formbinding.get(
            "ingred"
        ) as FormControl;
    }

    get ingredientsList() {
        return this.ingredientsName.valueChanges.pipe(debounceTime(100));
    }

    focusField(name) {
        this.focusedControl = name;
        this.activateFormTypes(name,productKeys,'');
        this.blurControl = false;
        

    }
    onClick(event) {
        if (event.target.tagName !== "INPUT") {
            this.blurControl = true;
        }
    }

    formBindingMapping(formBind) {
        return {
            strainGicc: '',
            strainGe: 0,
            enzymename: '',
            enzymeec: 0,
            rawChem: '',
            rawSup: 0,
            ingred: '',
            ingredPct: '',
            ingredFunc: 0,
            siteIndex: '',
            siteStep: 0,
            enduses: ''
        };
    }

    mappedValue(array, key) {
        this.resetValue(key);
        array.map(item => {
            this.productForm.controls[key].push(this.fb.control(item));
        });
    }

    resetValue(key) {
        const control = <FormArray>this.productForm.controls[key];
        for (let i = control.length - 1; i >= 0; i--) {
            control.removeAt(i);
        }
    }

    get productionStrains() {
        return this.productForm.get("productionStrains") as FormArray;
    }

    addProductionStrain(strain) {
        this.productionStrains.push(
            this.fb.control({
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/GICCTEST6_in_T00006_FRED",
                //productBulkCode: this.productForm.get('bulkCode').value,
                gicc: strain.gicc,
                geneticallyEngineered: strain.geneticallyEngineered
            })
        );
        if (this.formBindingObject) {
            this.productForm.controls.formbinding.patchValue({
                strainGe: this.formBindingObject.strainGicc
            });
            this.productForm.controls.formbinding.patchValue({
                strainGicc: this.formBindingObject.strainGicc
            });
        }
    }

    removeProductionStrain(index) {
        this.productionStrains.removeAt(index);
    }

    get enzymeActivity() {
        return this.productForm.get("enzymeActivity") as FormArray;
    }

    addEnzyme(enzymename) {
        this.enzymeActivity.push(
            this.fb.control({
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/EndUse_Grain_Processing_Product",
                name: enzymename.name,
                jurisdiction: enzymename.ec
            })
        );
        if (this.formBindingObject) {
            this.productForm.controls.formbinding.patchValue({
                enzymeec: this.formBindingObject.enzymeec
            });
            this.productForm.controls.formbinding.patchValue({
                enzymename: this.formBindingObject.enzymename
            });
        }
    }

    removeEnzymeActivity(index) {
        this.enzymeActivity.removeAt(index);
    }

    get rawMaterials() {
        return this.productForm.get("rawMaterials") as FormArray;
    }

    addRawMaterial(rawIndex) {
        let rawChem = rawIndex.rawChem;
        let getRawSupplier = this.rawSupplier.filter(
            supplier => supplier.value == parseInt(rawIndex.rawSup)
        );
        let rawSup =
            getRawSupplier.length === 0
                ? []
                : Object.assign({}, getRawSupplier[0]);
        this.rawMaterials.push(
            this.fb.control({
                name: rawChem,
                //productBulkCode: this.productForm.get('bulkCode').value,
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/CAS_110-44-1_for_T00006_FRED",
                cas: rawChem.value ? rawChem.value : "110-44-1",
                producer: {
                    uri:
                        "http://www.dupont.com/ontology/ontoPSR-product/DUNS_591348714",
                    //duns: rawSup.value.toString(),
                    duns: "591348714",
                    name: rawSup.text,
                    address: rawSup.address,
                    country: rawSup.country
                }
            })
        );
        if (this.formBindingObject) {
            this.productForm.controls.formbinding.patchValue({
                rawChem: this.formBindingObject.rawChem
            });
            this.productForm.controls.formbinding.patchValue({
                rawSup: this.formBindingObject.rawSup
            });
        }
    }

    removeRawMaterial(index) {
        this.rawMaterials.removeAt(index);
    }

    removeIngredients(index) {
        this.ingredients.removeAt(index);
    }

    get ingredients() {
        return this.productForm.get("ingredients") as FormArray;
    }

    addIngredient(indIndex) {
        let ingred = indIndex.ingredient;
        let concentration = parseFloat(indIndex.percentage);
        let ingredientFunction = indIndex.function;

        this.ingredients.push(
            this.fb.control({
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/CAS_7732-18-5_in_T00006_FRED",
                name: ingred,
                //productBulkCode: this.productForm.get('bulkCode').value,
                cas: "7732-18-5",
                concentration: concentration,
                ingredientFunction: ingredientFunction
            })
        );
        if (this.formBindingObject) {
            this.productForm.controls.formbinding.patchValue({
                ingred: this.formBindingObject.ingred
            });
            this.productForm.controls.formbinding.patchValue({
                ingredFunc: this.formBindingObject.ingredFunc
            });
            this.productForm.controls.formbinding.patchValue({
                ingredPct: this.formBindingObject.ingredPct
            });
        }
    }

    removeIngredient(index) {
        this.ingredients.removeAt(index);
    }

    get manufacturingSites() {
        return this.productForm.get("manufacturingSites") as FormArray;
    }

    addManufacturingSite(siteIndex) {
        this.manufacturingSites.push(
            this.fb.control({
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/Site_Beloit",
                name: siteIndex.siteIndex,
                country: "US",
                process: siteIndex.siteStep
            })
        );
        if (this.formBindingObject) {
            this.productForm.controls.formbinding.patchValue({
                siteIndex: this.formBindingObject.siteIndex
            });
            this.productForm.controls.formbinding.patchValue({
                siteStep: this.formBindingObject.siteStep
            });
        }
    }

    removeManufacturingSite(index) {
        this.manufacturingSites.removeAt(index);
    }

    get endUses() {
        return this.productForm.get("endUses") as FormArray;
    }

    removeEndUses(index) {
        this.endUses.removeAt(index);
    }

    complianceOnSubmit(productForm) {
        this.formSubmit = false;
        let productFormRequest = Object.keys(this.productForm.value).reduce(
            this.submitRequestBuild.bind(this),
            <Product>{}
        );
        this.smartService
            .getSmartCompliance(productFormRequest)
            .subscribe(smartres => {
                this.formSubmit = true;
                this.opendValue = true;
                this.productAssesment = smartres["assessment"];
            });
    }

    submitRequestBuild(responseBuild, currentProp) {
        if (currentProp !== "formbinding") {
            responseBuild[currentProp] = this.productForm.value[currentProp];
        }
        return responseBuild;
    }

    formUpdate(event) {
        if (!event.select) return;
        this.formUpdateValue = true;
        if (event.fieldName === "bulkCode") {
            this.productForm.get(event.fieldName).setValue(event.select.term);
            this.updateProductField(event);
        } else if (event.fieldName === "rawMaterials") {
            this.rawMaterialName.setValue(event.select.term);
        } else if (event.fieldName === "ingred") {
            this.ingredientsName.setValue(event.select.term);
        }
        this.blurControl = true;
    }

    updateProductField(selectField) {
        this.store.dispatch(
            new fromStore.LoadProductForm({
                name: selectField.select.bulkCode,
                internalProductName: selectField.select.internalProductName
            })
        );
        this.store.select(fromStore.getProductFormEntites).subscribe(next => {
            //this.storeUpdatae
            if (next.bulkCode) {
                let {
                    bulkCode,
                    country,
                    uri,
                    externalProductName,
                    internalProductName,
                    ...property
                } = next;
                Object.keys(property).map(item =>
                    this.mappedValue(property[item], item)
                );
                this.formBindingObject = this.formBindingMapping(next);
                this.productForm.controls.formbinding.setValue(
                    this.formBindingObject
                );
            }
        });
    }

    updateFormBindingFields() { }

    resetForminding(key, value) {
        this.productForm.controls.formbinding.controls[key].setValue(value);
    }

    complianceOnReset(product) {
        this.focusedControl =''
        let { bulkCode, country, uri, ...property } = product.controls;
        Object.keys(property).map(item => this.resetValue(item));
        Object.keys(resetSmartCompliance).map(item =>
            this.resetForminding(item, resetSmartCompliance[item])
        );
        this.productForm.controls["country"].controls["name"].setValue(0);
    }
    //Keydown autocomplete
    keydownHandler(event, field) {
        let dataValue = field();
        if (!dataValue.productData) return;
        if (event.keyCode == keyCodes.keydown) {
            this.currentFocus++;
            this.activeList(dataValue.productData);
        } else if (event.keyCode == keyCodes.keyup) {
            this.currentFocus--;
            this.activeList(dataValue.productData);
        } else if (event.keyCode === keyCodes.enter) {
            event.preventDefault();
            this.formUpdate({ select: dataValue.productData[this.currentFocus], fieldName: dataValue.fieldName });
        }
    }

    activeList(data) {
        if (!data) return false;
        if (this.currentFocus >= data.length) this.currentFocus = 0;
        if (this.currentFocus < 0) this.currentFocus = (data.length - 1);
        this.currentFocusData = { data: data[this.currentFocus], count: this.currentFocus }
    }

    createProductForm() {
        return this.fb.group({
            uri: "http://www.dupont.com/ontology/ontoPSR-product/T00006_FRED",
            bulkCode: ["T1234"],
            productionStrains: this.fb.array([]),
            enzymeActivity: this.fb.array([]),

            rawMaterials: this.fb.array([]),
            ingredients: this.fb.array([]),
            manufacturingSites: this.fb.array([]),
            endUses: this.fb.array([]),
            country: this.fb.group({
                uri:
                    "http://www.dupont.com/ontology/ontoPSR-product/Country_US",
                code: ["us"],
                name: ["United States"],
                region: ["NA"]
            }),
            formbinding: this.fb.group({
                strainGicc: ["Name"],
                strainGe: [productionStrainOptionsGe[0].value],
                enzymename: ["Enzyme"],
                enzymeec: [enzymeActivity[0].ec],
                rawChem: ["Raw Supplier"],
                rawSup: [rawSupplier[0].value],
                ingred: ["Ingredients"],
                ingredPct: [formPercentage[0]],
                ingredFunc: [formFunction[0]],
                siteIndex: ["Manufacturing Sites"],
                siteStep: [formManufactureStep[0]],
                enduses: ["endUses"]
            })
        });
    }

    activateFormTypes(type,{productBulkCode,productRawMaterials,productIngred},name){
        let getProducts = {
            [productBulkCode]: () => {
                return this.store.dispatch(new fromStore.LoadProduct({ name: name }));
            },
            [productRawMaterials] : () => {
                return  this.store.dispatch(new fromStore.LoadRawMaterials({ name: name}));
            },
            [productIngred] : () => {
                return this.store.dispatch(new fromStore.LoadRawMaterials({ name: name }));
            },
            'default' : () => {
                return this.store.dispatch(new fromStore.LoadProduct({ name: name }))
            }
        }
        return (getProducts[type] || getProducts['default']) ();
    }
}
