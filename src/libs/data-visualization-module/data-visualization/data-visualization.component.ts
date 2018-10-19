import { Component, OnInit } from "@angular/core";
import { DataVisualizationService } from "../services/data-visualization.service";
import { Observable } from "rxjs";
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
    constructor(
        private dataVisualService: DataVisualizationService,
        private fb: FormBuilder,
        private store :Store<VisualStateReducer>
    ) {}

    ngOnInit() {
        console.log("onInitEntry");
        this.visualForm = this.creatVisualforms();
        // this.visualizationCodeList.subscribe(next => {
        //     console.log(next);
        //     this.dataVisualService
        //         .getSearchDataVisualization({ name: next })
        //         .subscribe(next => {
        //             this.getVisualData = next.terms;
        //         });
        // });
        this.visualizationCodeList.subscribe(next => {this.store.dispatch(new fromVisual.LoadVisualChanges({ name: next }) )});
        this.store.select(fromVisual.getVisualChangesEntites).subscribe(next=>this.getVisualData = next)
        // this.dataVisualService.getDefaultDataVisualization().subscribe(next => {
        //     this.getVisualData = next.terms;
        // });
        this.store.dispatch(new fromVisual.LoadVisual());
        this.store.select(fromVisual.getVisualEntites).subscribe(next=>this.getVisualData = next) 
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
}
