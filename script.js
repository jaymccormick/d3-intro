

/**

// data, enter and d function
var dataset = [3, 6, 9, 12, 15];

d3.select("body").selectAll("p")
  .data(dataset)
  .enter()
  .append("p")
  .text(d => d);


// simple append
d3.select("body").append("p")
  .text("new paragraph!")
*/
