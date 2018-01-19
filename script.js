// initialize dataset list
var dataset = [];

// make dataset list of random numbers
for (var i = 0; i < 25; i++){
  dataset.push(Math.round(Math.random() * 30 + 3));
}


/**
// draw rectangles with data from dataset
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", d => d * 5 + "px");



// drawing with divs
d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", d =>
    d * 5 + "px") // have to include "px"
  .style("margin-right", "10px");




// setting attributes
attr([property, value])
for any HTML element <>, set property-value pair of attribute
related method: classed([class, boolean]) e.g. .classed("bar", true) for adding
and removing classes
<p class="caption">
<select id="country">
<img src="logo.png" width="100px" alt="Logo" />
property | value
class | caption
id | country
src | logo.png
width | 100px
alt | Logo


// setting css text color with d
d3.select("body").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(d => d)
  .style("color", d => "rgb(0," + (d * 10 - 30) + "," + (d * 15 + 30) + ")");



// data, enter and d function
d3.select("body").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(d => d);


// simple append
d3.select("body").append("p")
  .text("new paragraph!")
*/
