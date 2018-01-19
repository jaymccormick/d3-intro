// initialize dataset list
var dataset = [];

// make dataset list of random numbers
for (var i = 0; i < 25; i++){
  dataset.push(Math.round(Math.random() * 30 + 3));
}

// svg elements
// circle <circle cx="250" cy="150" r="50"/>
// ellipse <ellipse cx="250" cy="150" rx="50" ry="50"/>
// rectangle <rect x="0" y="10" width="30" height="30"/>
// line <line x1="0" y1="0" x2="50" y2="50" stroke="black"/>
// text <text x="250" y="25" font-family="sans-serif" font-size="25" fill="gray">
// Easy-peasy</text>
// path - complex shapes
// styling: fill, stroke, stroke-width, opacity, font-family, font-size
// opacity is multiplicative of rgba values
// or define as a CSS class <circl cx="25" cy="25" r="22" class="pumpkin" />
// svg is 2d but has an order; later svg elements occlude earlier ones
// more: http://svgpocketguide.com/


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
