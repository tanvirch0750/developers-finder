// STEP 1 - Include Dependencies
// Include react
// Include the fusioncharts library
import FusionCharts from 'fusioncharts';
// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React from 'react';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const chartComponent = ({ data }) => {
    const chartConfigs = {
        type: 'pie3d', // The chart type
        width: '400', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: 'Languages',
                theme: 'fusion',
                decimals: 0,
                pieRadius: '40%',
                // paletteColors: '#1EDD62, #B74DED, #3385CE',
            },
            // Chart Data
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};
export default chartComponent;
