import { Component } from "@angular/core";
import { DataVisualizationService } from "../services/data-visualization.service";
import { Observable } from "rxjs";
import { productList,PRODUCTKEYS,filterModel } from '../config/data-visualization.config';
import { FormBuilder, FormArray, FormControl, Validators } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import * as fromVisual from '../store';
import { VisualStateReducer } from '../store'
import { Store } from "@ngrx/store";

const keyCodes = { keyup: 38, keydown: 40, enter: 13 }

@Component({
    styleUrls: ["./data-visualization.component.scss"],
    templateUrl: "./data-visualization.component.html",
    host: {
        "(document:click)": "onClick($event)"
    }
})
export class DataVisualizationComponent {
    public getVisualData$: any;
    public getVisualData: any[];
    public visualForm: any;
    public productDropdown : any;
    public productList:any;
    public focusedControl:string;
    public focusControlIndex:number;
    public blurControl:boolean
    fieldValueList$: Observable<any>;
    currentFocus: number = -1;
    currentFocusData: any;
    formUpdateValue:boolean = false;
    addFilterDisabled:boolean = false;
    filterModels:any
    throttle:number = 300;
    scrollDistance:number = 1;
    scrollContainerSelector: string = '.content-area';
    concatDataForScroll:any;
     
    constructor(
        private dataVisualService: DataVisualizationService,
        private fb: FormBuilder,
        private store :Store<VisualStateReducer>
    ) {}

    ngOnInit() {
        console.log("onInitEntry");
        this.visualForm = this.creatVisualforms();
        this.visualizationCodeList.subscribe(next => {
            this.store.dispatch(new fromVisual.LoadVisualChanges({ name: next }) )
        });
        this.store.select(fromVisual.getVisualChangesEntites).subscribe(next=>this.getVisualData = next)
        this.store.dispatch(new fromVisual.LoadVisual());
        this.store.select(fromVisual.getVisualEntites).subscribe(next=>{
            this.getVisualData = next;
            this.concatDataForScroll = next;
        }) ;
        this.productList = productList;
        this.filterModels = filterModel;
        this.fieldValueList$ = this.store.select(fromVisual.getFieldValuesEntites);
        console.log(this.fieldValueList$ );
        
    }

    get visualizationCode() {
        return this.visualForm.get("vizualizationCode") as FormControl;
    }

    get filterControl(){
        return this.visualForm.get('filterControl') as FormArray
    }

    get visualizationCodeList() {
        return this.visualizationCode.valueChanges.pipe(debounceTime(100));
    }

    creatVisualforms() {
        return this.fb.group({
            vizualizationCode: ["visual data"],
            filterControl : this.fb.array([])
        });
    }

    getfieldValueListData() {
        let productData;
        this.fieldValueList$.subscribe(productCode => productData = productCode);
        return { productData: productData, fieldName: 'fieldValues' };
    }
    
    getProductIdListData(){
        let productData;
        this.fieldValueList$.subscribe(productCode => productData = productCode);
        return { productData: productData, fieldName: 'productId' };
    }

    addProductComponent(event){
        console.log(this.filterControl)
        this.filterControl.push(this.fb.group({
            name:['productFields'],
            fieldId:['select',Validators.required],
            fieldValues:'includes any',
            productId:'',
            productFieldList : [this.productList]
        }));
       this.currentFocus = -1;
       let filterCOntrolFields = this.filterControl.controls[ this.filterControl.length-1];
       filterCOntrolFields.get('fieldValues').valueChanges.subscribe(next=>{

           // this.setValueChanges()
        })
        filterCOntrolFields.get('productId').valueChanges.subscribe(next=>{
            if(this.focusedControl==='productId'){
                let getFieldDetails = this.getProductDetails(filterCOntrolFields);
                this.store.dispatch(new fromVisual.LoadFieldValues({fieldId:getFieldDetails.value,urlParams:PRODUCTKEYS[getFieldDetails.value],name:next}));
                this.setValueChanges();
            }
          
        });
        this.getSelectedProductList(this.filterControl)
        this.addFilterDisabled =true;
    }

    getProductDetails(formgroup){
        return formgroup.get('fieldId')
    }

    removeProductComponent(event,index){
        this.filterControl.removeAt(index);
        this.getSelectedProductList(this.filterControl)
    }

    setValueChanges(){
        this.currentFocus = -1;
        this.blurControl = false;
    }

    changeFilterField(event,index){
        this.visualForm.controls.filterControl.controls[index].patchValue({
            fieldId :event.target.value,
            fieldValues:'includes any',
            productId:''
        })
        this.getSelectedProductList(this.filterControl);
        
        if(this.filterControl.controls[ this.filterControl.length-1].get('fieldId').value==='select'){
            return;
        }
       
        this.addFilterDisabled = false;
    }

    changeFilterModel(event,index){
        this.visualForm.controls.filterControl.controls[index].patchValue({
            fieldValues :event.target.value
        })
    }

    formUpdate(event){
        if (!event.select) return;
        if(event.fieldName === "fieldValues"){
            this.visualForm.controls.filterControl.controls[this.focusControlIndex].patchValue({
                fieldValues :event.select.term
            })
        }
        else if(event.fieldName === "productId"){
            this.visualForm.controls.filterControl.controls[this.focusControlIndex].patchValue({
                productId :event.select.term
            })
        }
        this.blurControl = true;
    }

    focusField(index,name) {
        console.log(name)
        this.focusControlIndex=index;
        this.focusedControl = name;
        this.blurControl = true;
    }

    onClick(event) {
        if (event.target.tagName !== "INPUT") {
            this.blurControl = true;
        }
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

    searchProductComponent(){
        let getControlFieldId = this.filterControl.controls.map(control=>control.value.fieldId);
        let removeDuplicates = (controls) => controls.filter((control,index)=>controls.indexOf(control)===index);
        let createSearchRequestObjcet = removeDuplicates(getControlFieldId).reduce((response,resvalue)=>{
            let getFieldId = this.getFilterFieldId(resvalue);
            response.query.push({
                fieldId: resvalue,
                values : getFieldId.map(fieldvalue=>fieldvalue.value.productId).filter(fieldvalue=>fieldvalue!=='')
            });
            return response;
        },{query:[],limit:50,skip:0})
        console.log('createRequestObjcet====>',createSearchRequestObjcet);
        this.dataVisualService.searchApplyFilter(createSearchRequestObjcet).subscribe(next=>this.getVisualData=next)
    }

    getFilterFieldId(fieldId){
        return this.filterControl.controls.filter(item=>item.value.fieldId === fieldId)
    }

    getSelectedProductList(formData){
        let MappedData = formData.controls.map(control=>control.controls.fieldId.value);
        console.log(MappedData)
            formData.controls.forEach((eachControl)=>{
                let filterData = this.productList.filter(control=> MappedData.indexOf(control) == (-1) || control ===  eachControl.controls.fieldId.value
                );
                console.log(filterData)
                eachControl.patchValue({
                    productFieldList:filterData
                }) ;
            })
    }

    addSubListTreeBasedOnParent(type){
        let getProducts = {
            'country' : () => {
                return ['USA','Canada','United Kingdom','Brazil','Argentena'];
            },
            'enzyme' : () => {
                return ['enzyme-one','enzyme-two','enzyme-three','enzyme-four','enzyme-five'];
            },
            'productStrains' : () => {
                return ['productStrains-one','productStrains-two','productStrains-three','productStrains-four','productStrains-five'];
            },
            'RawMaterials' : () => {
                return ['RawMaterials-one','RawMaterials-two','RawMaterials-three','RawMaterials-four','RawMaterials-five'];
            },
            'Ingeridents' : () => {
                return ['Ingeridents-one','Ingeridents-two','Ingeridents-three','Ingeridents-four','Ingeridents-five'];
            },
            'default' : () => {
                return ['USA','Canada','United Kingdom','Brazil','Argentena']
            }
        }
        return (getProducts[type] || getProducts['default']) ();
    }

    onScrollDown (ev) {
        this.getVisualData = this.getVisualData.concat(this.concatDataForScroll);
        console.log(this.getVisualData)
    } 
}
