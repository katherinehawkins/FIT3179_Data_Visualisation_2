var vg_1 = "combined_map_bubble.json";
var vg_2 = "homework_w9_31561764.json";
var vg_3 = "inflation_chart.json";
var vg_4 = "stacked_bar.json";
vegaEmbed("#bubble_chart", vg_1, {"actions": false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#map_chart", vg_2, {"actions": false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#inflation_chart", vg_3, {"actions": false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
vegaEmbed("#bar_chart", vg_4, {"actions": false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);