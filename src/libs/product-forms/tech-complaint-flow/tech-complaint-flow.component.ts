import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import * as d3Graphviz from "d3-graphviz";
import * as d3 from "d3";
import * as ChartResponsive from "./decesion-tree-responsive";
import { Store } from "@ngrx/store";
import { SmartComplainceService } from "../services/smart-complaince.service";
import * as fromStore from "../store";
import { FormBuilder } from "@angular/forms";

@Component({
    selector: "app-tech-complaint-flow",
    templateUrl: "./tech-complaint-flow.component.html",
    styleUrls: ["./tech-complaint-flow.component.scss"]
})
export class TechComplaintFlowComponent implements OnInit {
    opened: boolean;
    public dots: any = [];
    public dotIndex: number = 0;
    public complianceForm:any;
    @Input()
    techComplaintNodes;
    constructor(private router: Router,
        public smartService: SmartComplainceService,
        private store: Store<fromStore.ProductState>,
        private fb: FormBuilder,
        ) {}

    ngOnInit() {
        this.opened = true;
        this.complianceForm= this.createComplianceForm()
        console.log('this.techComplaintNodes===>',this.techComplaintNodes);
        this.store.select(fromStore.getProductFormAssessments).subscribe(product=>{
            console.log(product)
           this.techComplaintNodes= product.techCompliance;
           console.log(this.complianceForm.get('toogleEnabled'))
           this.complianceForm.get('toogleEnabled').valueChanges.subscribe((item)=>{
            this.smartService.getToggleButton({name:item});
               console.log(item)
           })
        })
    }
    ngAfterViewInit() {
        if(!this.complianceForm.get('toogleEnabled').value){
            return
        }
        let sample = this.sample();
        this.flowInit();
        this.getTextgraphvizData(this.techComplaintNodes);
    }

    sample() {
        let array = [1, 2];
        return array[Math.floor(Math.random() * array.length)];
    }

    flowInit() {
        let self = this;
        let graphviz = d3Graphviz
            .graphviz("#graph")
            .logEvents(true)
            .on("initEnd", render.bind(self))

        function render() {
            let dotLines = this.dots[this.dotIndex];
            let dot = dotLines.join("");
            graphviz.renderDot(dot).on("end", function() {
                d3.selectAll(".node")
                    .on("click", event => {
                        console.log(event);
                        console.log("svg Click!!");
                    })
                    .style("cursor", "pointer");
            });
        }
    }
    getTextgraphvizData(assement) {
        let self = this;
        d3.select("svg").on("dblclick.zoom", null);
        let test = new Array(assement);
        console.log(test);
        self.dots.push(test);
    }


    formEdit(){
        this.router.navigate(['/product']);
    }
    ngOnDestroy(){

    }
    createComplianceForm(){
        return this.fb.group({
            toogleEnabled: this.fb.control(false,[])
        })
    }
}
