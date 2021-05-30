// STEP 1 - Include Dependencies
// Include react
// Include the fusioncharts library
import FusionCharts from 'fusioncharts';
// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';
// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';
import React from 'react';
// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 3 - Creating the JSON object to store the chart configurations

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
const chartComponent = ({ data }) => {
    const chartConfigs = {
        type: 'doughnut2d', // The chart type
        width: '100%', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            chart: {
                caption: 'Stars per language',
                theme: 'candy',
                decimals: 0,
                doughnutRadius: '40%',
                showPercentValues: 0,
                // paletteColors: '#1EDD62, #B74DED, #3385CE, #E278C6, #4AC7B0',
            },
            // Chart Data
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};
export default chartComponent;
