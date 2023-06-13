# Data : 
    
    This property holds an array of data objects, where each object represents a trace or a set of data points to be plotted. Each data object typically contains properties such as x (the x-axis values), y (the y-axis values), type (the type of chart), and more depending on the chart type.

# Examples : 

    var data = [
        {
            x: [2018, 2019, 2020, 2021, 2022],
            y: [2, 6, 4, 7, 4],
            type: 'scatter'
        }
    ];

# Layout : 

    This property defines the layout and appearance of the chart. It includes properties such as title (the chart title), xaxis and yaxis (configuration options for the x-axis and y-axis), showlegend (whether to display the legend), annotations (to add text or shapes to the chart), and more.

# Example : 

    var layout = {
        xaxis: {
            title: 'years',
            range: [0,2018,2023]
        },
        yaxis: {
            title: 'phones sold in millions',
            range: [0, 15]
        }
    };


# Config : 
    
    This property allows you to customize the behavior and appearance of the chart. It includes properties such as responsive (to make the chart responsive), displayModeBar (whether to show the interactive mode bar), scrollZoom (whether to enable zooming with scroll), and more.

# Example : 

    var config = {
        displayModeBar: true, 
        responsive: true 
    };

# Shapes : 
    To generate limit lines.

# Example : 

    shapes: [
        {
            type: 'line',
            xref: 'paper',
            x0: 0,
            x1: 1,
            yref: 'y',
            y0: 8,
            y1: 8,
            line: {
                color: 'Red',
                width: 2,
                // dash: 'dash'
            }
        }
    ]

# Update : 

    The update method allows you to update the data and layout of an existing plot. You can modify specific properties of the data and layout objects and then call the update method to apply the changes.

# Re-layout : 

    The re-layout method is used to update specific layout properties after the chart has been initially rendered. You can pass in an object with the properties to be updated, such as title, xaxis, yaxis, etc.

# Restyle : 

    The restyle method is used to update specific data properties of a trace in the chart. It allows you to update properties such as x, y, marker, line, and more.