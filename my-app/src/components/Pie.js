import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function PieChart() {
  const chartRef = useRef();

  useEffect(() => {
    // Define the data
    const data = [
      { year: '1977', mean: 15246 },
      { year: '1978', mean: 16629 },
      { year: '1979', mean: 17397 },
      { year: '1980', mean: 18049 },
      { year: '1995/96', mean: 24709 },
      { year: '1996/97', mean: 26100 },
      { year: '1997/98', mean: 27278 },
      { year: '1998/99', mean: 27913 },
      { year: '2007/08', mean: 38670 },
      { year: '2008/09', mean: 36420 },
      { year: '2009/10', mean: 37689 },
      { year: '2010/11', mean: 36240 },
      { year: '2011/12', mean: 35421 },
      { year: '2014/15', mean: 36875 },
      { year: '2015/16', mean: 38078 },
      { year: '2016/17', mean: 37956 },
      { year: '2019/20', mean: 39218 },
      { year: '2020/21', mean: 38994 }
    ];

    // Set up the dimensions and radius for the pie chart
    const width = 750;
    const height = 550;
    const radius = Math.min(width, height) / 2;
    const sliceMargin = 0.02; // Gap between slices

    // Remove any existing SVG elements in the container
    d3.select(chartRef.current).select('svg').remove();

    // Define the color scale
    const colorScale = d3.scaleSequential()
      .domain([0, data.length - 1])
      .interpolator(d3.interpolateTurbo);

    // Create the SVG container
    const svg = d3.select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Define the pie layout
    const pie = d3.pie()
      .value(d => d.mean)
      .sort(null);

    // Generate the arc data with a gap between slices
    const arc = d3.arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8)
      .padAngle(sliceMargin)
      .cornerRadius(4);

    // Generate the donut chart
    const slices = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colorScale(i));

    // Add labels to the slices
    const labels = svg.selectAll('text')
      .data(pie(data))
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arc.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .style('font-size', '50%')
      .text(d => d.data.year);

    // Add a legend with color gradient
    const legend = svg
      .selectAll('.legend')
      .data(data)
      .enter()
      .append('g')
      .attr('class', 'legend')
      .attr('transform', (d, i) => `translate(-100, ${i * 20})`);

    legend
      .append('rect')
      .attr('x', width - 18)
      .attr('width', 18)
      .attr('height', 18)
      .style('fill', (d, i) => colorScale(i));

    legend
      .append('text')
      .attr('x', width - 5)
      .attr('y', 9)
      .attr('dy', '.35em')
      .style('text-anchor', 'end')
      .text(d => d.year);
  }, []);

  return (
    <div>
      <br></br>
      <h2 style={{paddingLeft: '30px'}}> Mean income of Individuals over the past few years</h2>
      <h3></h3>
      <div ref={chartRef}></div>
    </div>
  );
}

export default PieChart;
