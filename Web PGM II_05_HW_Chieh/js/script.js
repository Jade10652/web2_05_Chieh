const data = [150, 377, 460, 730, 950, 340, 800, 660, 620, 570, 730, 500];

const colors = d3.scaleLinear()
	.domain([0, d3.max(data)])
	.range(['#48FFDB', '#004CED']);

const title = d3.select('#title')
				.style('font-family', 'Jura, sans-serif')
				.style('font-weight', '700i')
				.style('margin-left', '150px')
				.style('margin-top', '150px')
				.style('color', 'rgba(255, 100, 100, 0.85)')
	
const tooltip = d3.select('body')
				.append('div')
				.style('background', 'rgba(255, 100, 100, 0.85)')
				.style('color', '#FFFFFF')
				.style('font-size', '16px')
				.style('font-family', 'Jura, sans-serif')
				.style('font-weight', '300')
				.style('padding', '3px 6px')
				.style('position', 'absolute')
				.style('border', '0px solid #999999')
				.style('border-radius', '3px')
			
const chart = d3.select('#content')
				.append('svg')
				.attr('height', '400')
				.attr('width', '1000')
				.style('background', 'rgba(255, 150, 100, 0.4)')
				.style('margin-top', '0px')
				.style('margin-left', '150px')
				.style('padding-top', '15px')
				.style('padding-right', '50px')

chart.selectAll('rect')
	.data(data)
	.enter().append('rect')
			.attr('width',function(d, i) { return d-5; })
			.attr('height','31')
			.attr('y',function(d, i) { return 32*i; })
			.attr('x',function(d, i) { return 1000-(d); })
			.attr('fill', function(d, i) { return colors(d); })
			
			.on('mouseover', function(d) {
				tooltip.transition().duration(200)
				tooltip.html(d)
						.style('left', d3.event.layerX+20 + 'px')
						.style('top', d3.event.layerY-10 + 'px');
				
				d3.select(this)
				.transition()
				.duration(400)
				.style('opacity', 0.4)
				.attr('width',function(d, i) { return d; })
				.attr("rx", 6)
   		        .attr("ry", 6)
			})
			
			.on('mouseout', function(d) {
				tooltip.transition().duration(300)
				d3.select(this)
				.transition()
				.duration(400)
				.style('opacity', 1)
				.attr('width',function(d, i) { return d-5; })
				.attr("rx", 0)
   		        .attr("ry", 0)
			});