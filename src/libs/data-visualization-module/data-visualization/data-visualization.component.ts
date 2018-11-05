import { Component, OnInit } from "@angular/core";
import { DataVisualizationService } from "../services/data-visualization.service";
import { Observable } from "rxjs";
import {getProductDropDownResponse} from '../config/data-visualization.config';
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { debounceTime, map, switchMap, delay, filter } from "rxjs/operators";

import * as fromVisual from '../store';
import { VisualStateReducer } from '../store'
import { Store } from "@ngrx/store";

@Component({
    styleUrls: ["./data-visualization.component.scss"],
    templateUrl: "./data-visualization.component.html"
})
export class DataVisualizationComponent {
    public getVisualData$: any;
    public getVisualData: any[];
    public visualForm: any;
    public productDropdown : any;
    constructor(
        private dataVisualService: DataVisualizationService,
        private fb: FormBuilder,
        private store :Store<VisualStateReducer>
    ) {}

    ngOnInit() {
        console.log("onInitEntry");
        this.visualForm = this.creatVisualforms();
        this.visualizationCodeList.subscribe(next => {this.store.dispatch(new fromVisual.LoadVisualChanges({ name: next }) )});
        this.store.select(fromVisual.getVisualChangesEntites).subscribe(next=>this.getVisualData = next)
        this.store.dispatch(new fromVisual.LoadVisual());
        this.store.select(fromVisual.getVisualEntites).subscribe(next=>this.getVisualData = next) 
        this.productDropdown = [...getProductDropDownResponse];
    }

    get visualizationCode() {
        return this.visualForm.get("vizualizationCode") as FormControl;
    }

    get visualizationCodeList() {
        return this.visualizationCode.valueChanges.pipe(debounceTime(100));
    }

    creatVisualforms() {
        return this.fb.group({
            vizualizationCode: ["visual data"]
        });
    }

    addProductComponent(event){
       let getData = this.addProductDropdownData();
       let extractProductDropDown = this.productDropdown.map(item=>item)
       this.productDropdown =[...extractProductDropDown,getData]
    }

    addProductDropdownData(){
        let addData = {
            name:'visualProducts',
            subProductsList:[],
            list:['country','enzyme','productStrains','RawMaterials','Ingeridents']
        }    
        return addData;
    }

    getParentDropDown(event){
        let getProductValues = this.productDropdown.map(item=>item);
        let getSubTree = this.addSubListTreeBasedOnParent(event.eventName);
        getProductValues[event.index].subProductsList=[];
        getProductValues[event.index].subProductsList.push({name:event.eventName,list:getSubTree});
        this.productDropdown = [...getProductValues];
    }



    addSubListTreeBasedOnParent(type){
        let getProducts = {
            'country' : ()=>{
                return['USA','Canada','United Kingdom','Brazil','Argentena'];
            },
            'enzyme' : ()=>{
                return ['enzyme-one','enzyme-two','enzyme-three','enzyme-four','enzyme-five'];
            },
            'productStrains' : ()=>{
                return ['productStrains-one','productStrains-two','productStrains-three','productStrains-four','productStrains-five'];
            },
            'RawMaterials' : ()=>{
                return ['RawMaterials-one','RawMaterials-two','RawMaterials-three','RawMaterials-four','RawMaterials-five'];
            },
            'Ingeridents' : ()=>{
                return['Ingeridents-one','Ingeridents-two','Ingeridents-three','Ingeridents-four','Ingeridents-five'];
            },
            'default' : ()=>{
                return ['USA','Canada','United Kingdom','Brazil','Argentena']
            }
        }
        return (getProducts[type] || getProducts['default'])();
    }

    
}
