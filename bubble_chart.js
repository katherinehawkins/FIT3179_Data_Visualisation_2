var vg_1 = "homework_w10_31561764.json";
var vg_2 = "homework_w9_31561764.json";
var vg_3 = "inflation_chart.json"
vegaEmbed("#bubble_chart", vg_1).then(function(result) {
// Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#map_chart", vg_2).then(function(result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);
    vegaEmbed("#inflation_chart", vg_3).then(function(result) {
        // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
        }).catch(console.error);