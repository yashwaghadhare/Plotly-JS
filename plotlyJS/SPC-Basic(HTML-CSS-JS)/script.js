// Define the data for the 'Data' trace
var Data = {
    type: 'scatter',
    x: [1, 2, 3, 4, 5, 6, 7, 8, 9],  // x-coordinates of the data points
    y: [4, 2, -1, 4, -5, -7, 0, 3, 8],  // y-coordinates of the data points
    mode: 'lines+markers',  // display lines and markers
    name: 'Data',  // name of the trace for the legend
    showlegend: true,  // show the legend for this trace
    hoverinfo: 'all',  // display all hover information

    line: {
        color: 'blue',  // color of the line
        width: 2  // width of the line
    },

    //styling points
    marker: {
        color: 'blue',  // color of the markers
        size: 8,  // size of the markers
        symbol: 'circle'  // shape of the markers
    }
}

// Define the data for the 'Violation' trace
var Violation = {
    type: 'scatter',
    x: [6, 9],  // x-coordinates of the data points
    y: [-7, 8],  // y-coordinates of the data points
    mode: 'markers',  // display only markers
    name: 'Violation',  // name of the trace for the legend
    showlegend: true,  // show the legend for this trace
    marker: {
        color: 'red',  // color of the markers
        line: { width: 3 },  // width of the marker outline
        opacity: 0.5,  // opacity of the markers
        size: 12,  // size of the markers
        symbol: 'circle-open'  // shape of the markers
    }
}

// Define the data for 2 trace lines
var CL = {
    type: 'scatter',
    x: [0.5, 10, null, 0.5, 10],  // x-coordinates of the data points (including null for gaps)
    y: [-5, -5, null, 5, 5],  // y-coordinates of the data points (including null for gaps)
    mode: 'lines',  // display only lines
    name: 'LCL/UCL',  // name of the trace for the legend
    showlegend: true,  // show the legend for this trace
    line: {
        color: 'red',  // color of the line
        width: 2,  // width of the line
        dash: 'dash'  // style of the line (dashed)
    }
}

// Define the data for the 'Centre' trace
var Centre = {
    type: 'scatter',
    x: [0.5, 10],  // x-coordinates of the data points
    y: [0, 0],  // y-coordinates of the data points
    mode: 'lines',  // display only lines
    name: 'Centre',  // name of the trace for the legend
    //showlegend: true,  // show the legend for this trace
    line: {
        color: 'grey',  // color of the line
        width: 2  // width of the line
    }
}

// Combine all the traces into a single array
var data = [Data, Violation, CL, Centre]

// Define the layout options for the plot
var layout = {
    // title: 'Basic SPC Chart',  // title of the plot
    xaxis: {
        zeroline: false  // hide the x-axis line at y=0
    },
    yaxis: {
        range: [-10, 10],  // set the y-axis range
        zeroline: false  // hide the y-axis line at x=0
    }
}

// Create the plot with the specified data and layout
Plotly.newPlot('myPlot', data, layout);