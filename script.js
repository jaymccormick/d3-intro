// initialize dataset list
var dataset = [];

// make dataset m-by-n matrix of random points
for (var i = 0; i < 20; i++){
  var randX = Math.round(Math.random() * 250 + 1);
  var randY = Math.round(Math.random() * 250 + 1);

  dataset.push([randX, randY]);
}


// let's work with svg
// width and height variables
var w = 700;
var h = 450;


// add the svg element that will hold other svg elements
// can reference without having to reselect with d3.select("svg")
var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

// make circles for each data point in dataset
var circles = svg.selectAll("circle")
                  .data(dataset)
                  .enter()
                  .append("circle");


// create a linear scale function with domain and range mapping
// map max x, y value of dataset to max width, height
var xMax = d3.max(dataset, d => d[0]);
var yMax = d3.max(dataset, d => d[1]);

var padding = 30;

var xScale = d3.scaleLinear()
                    .domain([0, xMax])
                    .range([padding + Math.sqrt(xMax), w - padding + 10]);

var yScale = d3.scaleLinear()
                    .domain([0, yMax])
                    .range([h - padding, padding]);


// set circle attributes
// d is current value of dataset, one of the x, y pairs stored as arrays
circles.attr("cx", d => xScale(d[0]))
        .attr("cy", d => yScale(d[1]))
        .attr("r", d => Math.sqrt(d[1]));




// set up axes by defining axis functions
var xAxis = d3.axisBottom(xScale) ; // orientation

var yAxis = d3.axisLeft(yScale);

// call axis functions defined above
// fix transforms/axis scales calculations to get alignment and length right
svg.append("g")
    .attr("class", "axis") // add class for css
    .attr("transform", "translate(-6," + (h - 30) + ")") // position
    .call(xAxis);

svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + (padding + 10) + ",0)")
    .call(yAxis);


/**
// label points with text on the plot
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(d => "(" + Math.round(xScale(d[0])) + ", " + Math.round(yScale(d[1])) + ")" )
    .attr("x", d => xScale(d[0]) - 45)
    .attr("y", d => yScale(d[1]) + Math.sqrt(d[1]) + 15);

// label the points in the scatterplot below plot
svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(d => "(" + d[0] + ", " + d[1] + ")")
    .attr("x", (d, i) => i * 70)
    .attr("y", () => h - 20);

// draw curve from points to coordinates
// <line x1="0" y1="0" x2="500" y2="50" stroke="black"/>
svg.selectAll("line")
  .data(dataset)
  .enter()
  .append("line")
  .attr("x1", d => xScale(d[0]))
  .attr("y1", d => yScale(d[1]))
  .attr("x2", (d, i) => i * 70 + 30 ) // <-- need x2
  .attr("y2", h - 38)
  .attr("stroke", "black");


// make dataset list of random numbers
for (var i = 0; i < 20; i++){
  dataset.push(Math.round(Math.random() * 20 + 1));
}

// bar chart with svg rects

// bar width variable
var barPadding = 1;

// bars
var rects = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")

rects.attr("x", (d, i) => i * (w / dataset.length))
      .attr("y", d => h - d * 10)
      .attr("height", d => d * 10)
      .attr("width", w / dataset.length - barPadding)
      .attr("fill", d =>
            "rgb(" + d * 5 + "," + d * 10 + "," + d * 15 + " )"
            );

// add text labels
var labels = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(d => d);

labels.attr("x", (d, i) => (i* w / dataset.length) + (w / dataset.length - barPadding) / 2)
      .attr("y", d => h - d * 10 + 10)
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "white")
      .attr("text-anchor", "middle");



var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")

circles.attr("cx", (d, i) => i * 50 + 25)
        .attr("cy", h / 2)
        .attr("r", d => d);


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
