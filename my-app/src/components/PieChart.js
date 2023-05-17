import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function PieChart() {
    const chartRef = useRef();

    useEffect(() => {
        // Set the dimensions of the canvas / graph
        var width = 700,
            height = 550,
            radius = Math.min(width, height) / 2;


        // Remove any existing SVG elements in the container
        d3.select(chartRef.current).select('svg').remove();

        // Set the color scale
        var color = d3.scaleOrdinal()
            .range(["#98abc5", "#8a89a6"]);

        // Define the data
        var data = [
            { label: "Mean", value: d3.sum([15246, 16629, 17397, 18049, 18179, 17759, 18227]) },
            { label: "Median", value: d3.sum([13682, 15137, 15722, 16227, 15969, 15722, 15886]) }
        ];

        // Define the pie layout
        var pie = d3.pie()
            .sort(null)
            .value(function (d) { return d.value; });

        // Define the arc generator
        var arc = d3.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);

        // Define the svg canvas
        var svg = d3.select(chartRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        // Draw the pie chart
        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function (d) { return color(d.data.label); });

        g.append("text")
            .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
            .attr("dy", ".35em")
            .style("text-anchor", "middle")
            .text(function (d) { return d.data.label + " " + (d.data.value / 1000) + "K"; });
    }, []);

    return (
        <div>
            <h2 style={{paddingLeft: "20px"}}>Average total individual wealth</h2>
            <h3 style={{paddingLeft: "20px"}}> July 2010 to March 2020</h3>
            <br />
            <div ref={chartRef}></div>
        </div>
    );
}

export default PieChart;
