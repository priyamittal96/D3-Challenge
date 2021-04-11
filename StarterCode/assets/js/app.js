// @TODO: YOUR CODE HERE! 

// Pre-Data Setup

// Width of the Container
var width = parseInt(d3.select("#scatter").style("width"));

// Designate the height & margins
var height = width - width / 3.9;
var margin = 20;

// Spacing for Placing Words
var labelArea = 110;

// padding for the text on the axes
var tPadBot = 40; 
var tPadLeft = 40; 

// Generate svg
var svg = d3
    .select("#scatter")
    .append("svg")
    .attr("width",width)
    .attr("height",height)
    .attr("class", "chart")

// Dot radius
var cicrRadius ;
function crGet(){
    if (width <= 530){
        circRadius = 5;
    } 
    else {
        circRadius = 10;
    }
}

crGet();

// group svg together
svg.append("g").attr("class","xText");

// xText will allow us to select group without excess code
var xText = d3.select(".xText");

function xTextRefresh(){
    xText.attr(
        "transform",
        "translate(" +
        ((width - labelArea) / 2 + labelArea) + 
        ", " + 
        (height - margin - tPadBot) + 
        ")"
    )
}

xTextRefresh()