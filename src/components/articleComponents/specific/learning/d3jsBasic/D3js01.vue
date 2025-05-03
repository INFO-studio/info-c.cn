<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as d3 from 'd3'
const svg = ref()
const svgConfig = {
  width: 600,
  height: 400,
  margin: {
    top: 40,
    right: 30,
    bottom: 60,
    left: 60,
  },
  colors: {
    background: '#f8f9fa11',
    line: '#4e79a799',
    point: '#4e79a7',
    axis: '#ffffffcc',
    text: '#ffffffcc'
  }
}
const data = [
  { day: '2023-01-01', value: 1 },
  { day: '2023-01-02', value: 2 },
  { day: '2023-01-03', value: 4 },
  { day: '2023-01-04', value: 3 },
  { day: '2023-01-05', value: 10 },
  { day: '2023-01-06', value: 8 },
  { day: '2023-01-07', value: 19 },
  { day: '2023-01-08', value: 10 },
  { day: '2023-01-09', value: 7 },
  { day: '2023-01-10', value: 4 },
  { day: '2023-01-11', value: 1 },
]
const initChart = () => {
  svgConfig.innerWidth = svgConfig.width - svgConfig.margin.left - svgConfig.margin.right
  svgConfig.innerHeight = svgConfig.height - svgConfig.margin.top - svgConfig.margin.bottom
  const svgEl = d3.select(svg.value)
    .attr('width', svgConfig.width)
    .attr('height', svgConfig.height)
    .attr('viewBox', `0 0 ${svgConfig.width} ${svgConfig.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .style('background-color', svgConfig.colors.background)
    .style('border-radius', '8px')
    .style('box-shadow', '0 2px 8px rgba(0,0,0,0.1)')
  const content = svgEl.append('g')
    .attr('transform', `translate(${svgConfig.margin.left}, ${svgConfig.margin.top})`)
  const parseTime = d3.timeParse('%Y-%m-%d')
  const dayGet = (d: any) => parseTime(d.day)
  const valueGet = (d: any) => d.value
  const dayScale = d3.scaleTime()
    .domain(d3.extent(data, dayGet) as [Date, Date])
    .range([0, svgConfig.innerWidth])
    .nice()
  const valueScale = d3.scaleLinear()
    .domain([0, d3.max(data, valueGet) as number])
    .range([svgConfig.innerHeight, 0])
    .nice()
  const xAxis = d3.axisBottom(dayScale)
    .tickFormat(d3.timeFormat('%m-%d'))
  const yAxis = d3.axisLeft(valueScale)
  content.append('g')
    .attr('class', 'x-axis')
    .attr('transform', `translate(0, ${svgConfig.innerHeight})`)
    .call(xAxis)
    .selectAll('text')
    .style('text-anchor', 'end')
    .attr('dx', '-.8em')
    .attr('dy', '.15em')
    .attr('transform', 'rotate(-45)')
  content.append('g')
    .attr('class', 'y-axis')
    .call(yAxis)
  content.append('g')
    .attr('class', 'grid')
    .call(d3.axisLeft(valueScale)
      .tickSize(-svgConfig.innerWidth)
      .tickFormat('' as any)
    )
    .selectAll('line')
    .attr('stroke', '#e9ecef')
    .attr('stroke-dasharray', '2,2')
  const lineGenerator = d3.line()
    .x(d => dayScale(dayGet(d)))
    .y(d => valueScale(valueGet(d)))
    .curve(d3.curveCatmullRom.alpha(0.5))
  content.append('path')
    .datum(data)
    .attr('d', lineGenerator)
    .attr('fill', 'none')
    .attr('stroke', svgConfig.colors.line)
    .attr('stroke-width', 2)
    .attr('stroke-linejoin', 'round')
    .attr('stroke-linecap', 'round')
  content.selectAll('.point')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'point')
    .attr('cx', d => dayScale(dayGet(d)))
    .attr('cy', d => valueScale(valueGet(d)))
    .attr('r', 5)
    .attr('fill', svgConfig.colors.point)
    .attr('stroke-width', 1.5)
}
onMounted(() => {
  initChart()
})
</script>

<template>
  <svg ref="svg" class="chart-container" />
</template>

<style scoped>
.chart-container {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0 auto;
}
</style>
