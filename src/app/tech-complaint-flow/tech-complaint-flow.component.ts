import { Component, OnInit,Input,AfterViewInit} from '@angular/core';
import * as d3Graphviz from 'd3-graphviz'
import * as d3 from 'd3v4';
import * as ChartResponsive from './decesion-tree-responsive';

@Component({
  selector: 'app-tech-complaint-flow',
  templateUrl: './tech-complaint-flow.component.html',
  styleUrls: ['./tech-complaint-flow.component.scss']
})
export class TechComplaintFlowComponent implements OnInit {
  opened:boolean;
  public dots:any=[];
  public dotIndex:number=0;
  @Input() techComplaintNodes;
  constructor() { }

  ngOnInit() {
    this.opened=true
  }
  ngAfterViewInit(){
    let sample = this.sample()
    this.flowInit();
    this.getTextgraphvizData(this.techComplaintNodes);
     
  }

  sample() {
    let array = [1,2]
    return array[Math.floor(Math.random() * array.length)];
  }

  flowInit(){
    let self=this;
    let graphviz = d3Graphviz.graphviz("#graph")
    .logEvents(true)
    .on("initEnd", render.bind(self));
    console.log( d3Graphviz)

function render() {
    let dotLines = this.dots[this.dotIndex];
    let dot = dotLines.join('');
    graphviz
        .renderDot(dot)
        .on("end", function () {
           // this.dotIndex = (this.dotIndex + 1) % this.dots.length;
           //  render();
           d3.select("svg").call(ChartResponsive.lineResponsive);
           d3.select("svg").on("dblclick.zoom", null);
            d3.selectAll('.node').on('click',(event)=>{
              console.log(event)
              console.log('svg Click!!')
            }).style('cursor','pointer')
        });
  
}

  }
  getTextgraphvizData(assement){
    let self= this;
    d3.select("svg").on("dblclick.zoom", null);
   // d3.text(`tech-complaint-flow-data.${index}.txt`, (error, flare)=> {
      let test= new Array(assement)
      console.log(test)
      self.dots.push(test);
  // })
  }



}
