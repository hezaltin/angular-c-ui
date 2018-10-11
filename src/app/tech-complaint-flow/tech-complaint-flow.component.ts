import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as d3Graphviz from 'd3-graphviz';
import * as d3 from 'd3';
import * as ChartResponsive from './decesion-tree-responsive';

@Component({
  selector: 'app-tech-complaint-flow',
  templateUrl: './tech-complaint-flow.component.html',
  styleUrls: ['./tech-complaint-flow.component.scss']
})
export class TechComplaintFlowComponent implements OnInit {
  opened: boolean;
  public dots: any = [];
  public dotIndex: number = 0;
  @Input() techComplaintNodes;
  constructor() { }

  ngOnInit() {
    this.opened = true
  }
  ngAfterViewInit() {
    let sample = this.sample()
    this.flowInit();
    this.getTextgraphvizData(this.techComplaintNodes);

  }

  sample() {
    let array = [1, 2]
    return array[Math.floor(Math.random() * array.length)];
  }

  flowInit() {
    let self = this;
    let graphviz = d3Graphviz.graphviz("#graph")
      .logEvents(true)
      .on("initEnd", render.bind(self)).attributer(this.attributer);

    function render() {
      let dotLines = this.dots[this.dotIndex];
      let dot = dotLines.join('');
      graphviz
        .renderDot(dot)
        .on("end", function () {
          d3.selectAll('.node').on('click', (event) => {
            console.log(event)
            console.log('svg Click!!')
          }).style('cursor', 'pointer')
        });

    }

  }
  getTextgraphvizData(assement) {
    let self = this;
    d3.select("svg").on("dblclick.zoom", null);
    let test = new Array(assement)
    console.log(test)
    self.dots.push(test);
  }

  attributer(datum, index, nodes) {
    var selection = d3.select(this);
    if (datum.tag == "svg") {
      var width = d3.select('#graph').node().clientWidth;
      var height = d3.select('#graph').node().clientHeight;
      var x = "10";
      var y = "10";
      var unit = 'px';
      selection
        .attr("width", width + unit)
        .attr("height", height + unit);
      datum.attributes.width = width + unit;
      datum.attributes.height = height + unit;
    }
  }


}

function resizeSVG() {
  var width = d3.select('#graph').node().clientWidth;
  var height = d3.select('#graph').node().clientHeight;
  var svg = d3.select("#graph").selectWithoutDataPropagation("svg");
  svg
    .transition()
    .duration(700)
    .attr("width", width)
    .attr("height", height);

  var d = svg.datum();
  d.attributes['width'] = width;
  d.attributes['height'] = height;
};
d3.select(window).on("resize", resizeSVG);
