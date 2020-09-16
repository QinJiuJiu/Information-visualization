var svg = d3.select("#svg3"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(() => -1000))
    .force("center", d3.forceCenter(width / 2, height / 2))

d3.json("data/manpower.json", function(error, graph) {
    if (error) throw error;

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .style("stroke-width", function(d) { return Math.sqrt(d.value/20); });

    var node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) { return color(d.group); })
        .attr("fill-copied", function(d) { return color(d.group); })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    node.append("title")
        .text(function(d) { return d.id; });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    // add legend   
    var legend = svg.append("g")
        .attr("class", "legend")
        .attr("x", width/3)
        .attr("y", height/3)
        .attr("height", 100)
        .attr("width", 100);

    legend.selectAll('g').data(graph.leg)
        .enter()
        .append('g')
        .each(function (d, i) {
            var g = d3.select(this);
            g.append("rect")
                .attr("x", (i+1)*260)
                .attr("y", 50)
                .attr("width", 20)
                .attr("height", 20)
                .style("fill", function (d) { return color(d.group); });

            g.append("text")
                .attr("x", (i+1)*260 + 30)
                .attr("y", 65)
                .attr("height", 30)
                .attr("width", 400)
                .style("fill", function (d) { return color(d.group); })
                .text(function (d) { return d.id; })

        });
    // var brush = svg.append("g")
    //     .datum(function() { return {selected: false, previouslySelected: false}; })
    //     .attr("class", "brush")
    //     .call(d3.brush()
    //         .extent([[0, 0], [width, height]])
    //         .on("brush", function() {
    //             var extent = d3.event.selection;
    //             node.style("fill", function(d) {
    //                 var evaluation = extent[0][0] <= d.x && d.x < extent[1][0]
    //                     && extent[0][1] <= d.y && d.y < extent[1][1];
    //                 if (evaluation == true) {
    //                     return "red"
    //                 } else {
    //                     return d3.select(this).attr("fill-copied");
    //                 }

    //             });
    //         })
    // );

    function ticked() {
        link
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        node
            .attr("cx", function(d) { return d.x; })
            .attr("cy", function(d) { return d.y; });
    }
});

function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
