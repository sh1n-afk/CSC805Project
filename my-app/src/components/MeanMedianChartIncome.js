import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function MeanMedianChartIncome() {
  const chartRef = useRef();

  useEffect(() => {
    // Set the dimensions and margins of the graph
    const margin = { top: 10, right: 10, bottom: 30, left: 80 };
    const width = 650 - margin.left - margin.right;
    const height = 450 - margin.top - margin.bottom;

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

    // Define the data
    const data = [
      { year: 1977, mean: 15246, median: 13682 },
      { year: 1978, mean: 16629, median: 15137 },
      { year: 1979, mean: 17397, median: 15722 },
      { year: 1980, mean: 18049, median: 16227 },
      { year: 1981, mean: 18179, median: 15969 },
      { year: 1982, mean: 17759, median: 15722 },
      { year: 1983, mean: 18227, median: 15886 },
      { year: 1984, mean: 18588, median: 16387 },
      { year: 1985, mean: 19836, median: 17107 },
      { year: 1986, mean: 20653, median: 17801 },
      { year: 1987, mean: 22023, median: 18705 },
      { year: 1988, mean: 23627, median: 19877 },
      { year: 1989, mean: 23929, median: 20391 },
      { year: 1990, mean: 25248, median: 20903 },
      { year: 1991, mean: 25541, median: 21523 },
      { year: 1992, mean: 24642, median: 20895 },
      { year: 1993, mean: 24366, median: 20329 },
      { year: 1994, mean: 24861, median: 20866 },
      { year: 1995, mean: 24709, median: 20926 },
      { year: 1996, mean: 26100, median: 22086 },
      { year: 1997, mean: 27278, median: 22649 },
      { year: 1998, mean: 27913, median: 23126 },
      { year: 1999, mean: 29623, median: 24605 },
      { year: 2000, mean: 30341, median: 25019 },
      { year: 2001, mean: 32733, median: 26613 },
      { year: 2002, mean: 33635, median: 27474 },
      { year: 2003, mean: 34037, median: 27898 },
      { year: 2004, mean: 35461, median: 28769 },
      { year: 2005, mean: 36621, median: 29095 },
      { year: 2006, mean: 37397, median: 29073 },
      { year: 2007, mean: 38670, median: 29511 },
      { year: 2008, mean: 36420, median: 29166 },
      { year: 2009, mean: 37689, median: 29205 },
      { year: 2010, mean: 36240, median: 29165 },
      { year: 2011, mean: 35421, median: 28481 },
      { year: 2012, mean: 34735, median: 27828 },
      { year: 2013, mean: 36153, median: 28544 },
      { year: 2014, mean: 36875, median: 29782 },
      { year: 2015, mean: 38078, median: 30303 },
      { year: 2016, mean: 37956, median: 31121 },
      { year: 2017, mean: 37330, median: 30377 },
      { year: 2018, mean: 37724, median: 30625 },
      { year: 2019, mean: 39218, median: 31883 },
      { year: 2020, mean: 38994, median: 32528 },
      { year: 2021, mean: 39328, median: 32349 },
    ];

    // Define the x and y scales and axis
    const x = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.year))
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => Math.min(d.mean, d.median)),
        d3.max(data, (d) => Math.max(d.mean, d.median)),
      ])
      .range([height, 0]);

    svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));
    svg.append('g').call(d3.axisLeft(y));

    // Add the mean line
    const lineMean = d3
      .line()
      .x((d) => x(d.year))
      .y((d) => y(d.mean));

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .attr('stroke-width', 1.5)
      .attr('d', lineMean);

    // Add the median line
    const lineMedian = d3
      .line()
      .x((d) => x(d.year))
      .y((d) => y(d.median));

    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'red')
      .attr('stroke-width', 1.5)
      .attr('d', lineMedian);

    // Add a legend
    const legend = svg.append('g')
      .attr('class', 'legend')
      .attr('transform', `translate(${width - 150},${height - 20})`);

    // Add a legend item for the mean line
    const meanLegendItem = legend.append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'blue');

    const meanLegendText = legend.append('text')
      .attr('x', 15)
      .attr('y', 10)
      .style('font-size', '20px')
      .text('Mean');

    // Add a legend item for the median line
    const medianLegendItem = legend.append('rect')
      .attr('x', 0)
      .attr('y', -20)
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'red');

    const medianLegendText = legend.append('text')
      .attr('x', 15)
      .attr('y', -10)
      .style('font-size', '20px')
      .text('Median');

    svg
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - margin.left - 15)
      .attr('x', 0 - height + 200)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Average');

    svg
      .append('text')
      .attr('y', height + 10)
      .attr('x', width / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .style('font-size', '22px')
      .text('Years');
  }, []);

  return (
    <div>
      <br></br>
      <h1 style={{marginLeft: "30px"}}>Mean and Median</h1>
      <br></br>
      <div ref={chartRef}></div>
      <br></br>
    </div>
  );
}

export default MeanMedianChartIncome;