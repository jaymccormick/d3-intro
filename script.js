var dataset = [3, 6, 9, 12, 15];


/**

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
