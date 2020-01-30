const axios = require('axios');
var Highcharts = require('highcharts');

export default class MartianWindspeed {
    render() {

        let weatherData;

        axios.get('/martianweather')
            .then(res => {
                weatherData = res.data;
                console.log(weatherData);
                Highcharts.chart('windspeed-chart', {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Weekly Windspeed Forecast'
                    },
                    subtitle: {
                        text: 'Source: NASA Mars InSight Weather Report'
                    },
                    xAxis: {
                        title: {
                            text: 'Sol'
                        },
                        categories: weatherData.sol_keys
                    },
                    yAxis: {
                        title: {
                            text: 'Windspeed (mph)'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true
                            },
                            enableMouseTracking: false
                        }
                    },
                    series: [{
                        name: 'Average Windspeed',
                        data: weatherData.sol_keys.map(key => {
                            console.log(key);
                            return Math.floor(weatherData[key].HWS.av);
                        })
                    }, {
                        name: 'Min',
                        data: weatherData.sol_keys.map(key => {
                            return Math.floor(weatherData[key].HWS.mn);
                        })
                    }, {
                        name: 'Max',
                        data: weatherData.sol_keys.map(key => {
                            return Math.floor(weatherData[key].HWS.mx);
                        })
                    }]
                });
            });
    }

}