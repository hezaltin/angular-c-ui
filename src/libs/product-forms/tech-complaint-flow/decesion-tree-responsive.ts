import * as d3 from 'd3v4';

let responsiveContainer;
let aspect;

export function lineResponsive(svg) {
  // get responsiveContainer + svg aspect ratio
  let responsiveContainer = d3.select(svg.node().parentNode);

  let width = (parseInt(svg.style("width")));
  let height = 20;
  let aspect = (width / height);

  svg.attr("viewBox", "0 0 " + width + " " + height)
    .attr("perserveAspectRatio", "xMinYMid")
    .call(resize);

  d3.select(window).on("resize." + responsiveContainer.attr("id"), () => {
    resize(svg)
  });
}

function resize(svg) {
  return () => {
    let targetWidth = parseInt(responsiveContainer.style("width"));
    svg.attr("width", targetWidth);
    svg.attr("height", Math.round(targetWidth / aspect));
  }

}
