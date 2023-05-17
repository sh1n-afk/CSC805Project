// Set the dimensions and margins of the chart
var margin = { top: 20, right: 30, bottom: 50, left: 100 },
  width = 800 - margin.left - margin.right,
  height = 1000 - margin.top - margin.bottom;

// Append the SVG object to the body of the page
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("class", "chart")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Load the data from the CSV file
d3.csv("./data.csv").then(function (data) {
  // Format the data
  var formattedData = data.map(function (d) {
    return {
      year: d.year,
      "Mean equivalised disposable income": +d["Mean equivalised disposable income"],
      "Median equivalised disposable income": +d["Median equivalised disposable income"],
    };
  });

  // Create an array of years
  var years = formattedData.map(function (d) { return d.year; });

  // Create a color scale
  var color = d3.scaleOrdinal(d3.schemeSet2);

  // Stack the data
  var stackedData = d3.stack()
    .keys(["Mean equivalised disposable income", "Median equivalised disposable income"])
    .order(d3.stackOrderNone)
    .offset(d3.stackOffsetNone)
    (formattedData);

  // Set the X scale
  var x = d3.scaleLinear()
    .domain([0, d3.max(stackedData, function (d) { return d3.max(d, function (d) { return d[1]; }); })])
    .range([0, width]);

  // Set the Y scale
  var y = d3.scaleBand()
    .domain(years)
    .range([0, height])
    .padding(0.2);

  // Add X axis
  svg.append("g")
    .attr("class", "axis-x")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  svg.append("g")
    .attr("class", "axis-y")
    .call(d3.axisLeft(y));

  // Add stacked bars
svg.append("text")
  .attr("class", "x label")
  .attr("text-anchor", "end")
  .attr("x", width - 300)
  .attr("y", height + 40)
  .text("Income in Pounds");

svg.append("text")
  .attr("class", "y label")
  .attr("text-anchor", "end")
  .attr("y", -75)
  .attr("x", -500)
  .attr("dy", ".75em")
  .attr("transform", "rotate(-90)")
  .text("Date");
  
var bars = svg.selectAll(".bar")
.data(stackedData)
.enter()
.append("g")
.attr("fill", function (d) { return color(d.key); });

bars.selectAll("rect")
.data(function (d) { return d; })
.enter()
.append("rect")
.attr("class", "bar")
.attr("x", function (d) { return x(d[0]); })
.attr("y", function (d) { return y(d.data.year); })
.attr("width", function (d) { return x(d[1]) - x(d[0]); })
.attr("height", y.bandwidth());

// Add text labels inside the bars
bars.selectAll(".bar-label")
.data(function (d) { return d; })
.enter()
.append("text")
.attr("class", "bar-label")
.attr("x", function (d) { return x(d[1]) - 10; }) // Adjust the position as needed
.attr("y", function (d) { return y(d.data.year) + y.bandwidth() / 2; })
.attr("dy", "0.35em")
.attr("text-anchor", "end") // Align the text to the end of the bar
.text(function (d) { return d3.format(".2f")(d[1] - d[0]); });
})