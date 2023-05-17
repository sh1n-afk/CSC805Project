import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function MeanMedianChart() {
  const chartRef = useRef();

  useEffect(() => {
    // Set the dimensions and margins of the graph
    const margin = { top: 50, right: 50, bottom: 70, left: 70 };
    const width = 750 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;
 
    // Remove any existing SVG elements in the container
    d3.select(chartRef.current).select('svg').remove();

    // Create the SVG container
    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create the data array
    const data = [
      { period: "July 2010 - June 2012", median: 88000, mean: 201300 },
      { period: "July 2012 - June 2014", median: 91000, mean: 226500 },
      { period: "July 2014 - June 2016", median: 106600, mean: 265300 },
      { period: "April 2014 - March 2016", median: 104000, mean: 258300 },
      { period: "April 2016 - March 2018", median: 117500, mean: 296200 },
      { period: "April 2018 - March 2020", median: 124700, mean: 304800 },
    ];

    // Create the x and y scales
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.period))
      .padding(0.2);
    const y = d3
      .scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, (d) => d.mean)]);

    // Create the x and y axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    // Add the x and y axes to the svg
    svg.append('g').attr('transform', `translate(0,${height})`).call(xAxis);
    svg.append('g').call(yAxis);

    // Add the bars to the svg
    svg
      .selectAll('.bar')
      .data(data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.period))
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.mean))
      .attr('height', (d) => height - y(d.mean));

    // Add x-axis label
    svg
      .append('text')
      .attr('transform', `translate(${width / 2},${height + margin.top - 10})`)
      .style('text-anchor', 'middle')
      .text('Time Period');

    // Add y-axis label
    svg
      .append('text')
      .attr('transform', `rotate(-90) translate(-${height / 2}, -${margin.left - 18})`)
      .style('text-anchor', 'middle')
      .text('Average');
  }, []);

  return (
    <div>
      <h2 style={{paddingLeft: "20px"}}>Average Total Individual Wealth</h2>
      <h3 style={{paddingLeft: "20px"}}> July 2010 to March 2020</h3>
      <div ref={chartRef}></div>
    </div>
  );
}

export default MeanMedianChart;
