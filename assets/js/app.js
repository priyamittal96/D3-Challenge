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

// xAxis Labels 
xText
    .append("text")
    .attr("y", -26)
    .attr("data-name","poverty")
    .attr("data-axix","x")
    .attr("class","aText active x")
    .text("In Poverty (%)")

xText
    .append("text")
    .attr("y", 0)
    .attr("data-name","age")
    .attr("data-axix","x")
    .attr("class","aText inactive x")
    .text("Age (Median)")   

xText
    .append("text")
    .attr("y", 26)
    .attr("data-name","income")
    .attr("data-axix","x")
    .attr("class","aText inactive x")
    .text("Household Income (Median)")   

// yText & yAxis Labels 
var leftTextX = margin + tPadLeft;
var leftTextY = (height + labelArea) / 2 - labelArea;

svg.append("g").attr("class","yText");

var yText = d3.select(".yText");

function yTextRefresh(){
    yText.attr(
        "transform",
       `translate(${leftTextX},${leftTextY}) rotate(-90)`
    ) 
}

yTextRefresh( )

yText
    .append("text")
    .attr("y", -26)
    .attr("data-name","obesity")
    .attr("data-axix","y")
    .attr("class","aText active y")
    .text("Obese (%)")

yText
    .append("text")
    .attr("y", 0)
    .attr("data-name","smokes")
    .attr("data-axix","y")
    .attr("class","aText inactive y")
    .text("Smokes (%)")   

yText
    .append("text")
    .attr("y", 26)
    .attr("data-name","healthcare")
    .attr("data-axix","y")
    .attr("class","aText inactive y")
    .text("lack of Healthcare (%)")   

// Import csv file for data

d3.csv("assets/data/data.csv").then(function(data){
    // console.log(data);
})

// visualize it
function visualize(data){
    var curX = "poverty";
    var curY = "obesity";

    var xMin;
    var xMax;
    var yMin;
    var yMax;

    var toolTip = d3
        .tip()
        .attr("class","d3-tip")
        .offset([40,-60])
        .html(function(d){
            var theX;
            var theState = `<div>${d.state}</div>`;
            var theY = `<div>${curY}: ${d[curY]}</div>`

            if (curX === "poverty"){
                theX = `<div>${curX}: ${d[curX]}</div>`
            }
            else {
                theX = `<div>${curX}: ${parseFloat(d[curX]).toLocaleString("en")}</div>`
            }

            return theState + theX + theY;
            
        })
    
    svg.call(toolTip);

    // part 2

    function xMinMax(){
        xMin = d3.min(data,function(d){
            return parseFloat(d[curX]) * 0.90;
        })

        xMax = d3.max(data,function(d){
            return parseFloat(d[curX]) * 1.10;
        })
    }

    function yMinMax(){
        yMin = d3.min(data,function(d){
            return parseFloat(d[curY]) * 0.90;
        })

        yMax = d3.max(data,function(d){
            return parseFloat(d[curY]) * 1.10;
        })
    }

    // change classes and appearance of label


    }