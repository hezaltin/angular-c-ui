import { Component, OnInit, Input, SimpleChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector: "app-data-visualization-dropdown",
    styleUrls: ["./visualization-dropdown.component.scss"],
    templateUrl: "./visualization-dropdown.component.html"
})
export class VisualizationDropdownComponent {
    @Input() dropdownVisual;
    @Output() emitdropDown= new EventEmitter;
    public getVisualData$: any;
    public getVisualData: any[];
    public products: any;
    
    constructor() {}

    ngOnChanges(changes:SimpleChanges){
            console.log('changes===>',changes)
            if(changes.dropdownVisual){
                if(changes.dropdownVisual.currentValue){
                    this.products = changes.dropdownVisual.currentValue
                }
            }
           
    }

    ngOnInit() {
        console.log("onInitEntry");
        
    }

    changeHandler(event,drodownIndex){  
        console.log(event)
        this.emitdropDown.emit({index:drodownIndex,eventName:event.target.value})
    }

    changeHandlerSubList(event,drodownIndex){
        
    }

    getProductData(index){
        return this.products[index];
    }


    
}
