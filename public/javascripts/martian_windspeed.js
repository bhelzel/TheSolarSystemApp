const axios = require('axios');
export default class MartianWindspeed {
    render() {

        let weatherData;

        axios.get('/martianweather')
            .then(res => {
                weatherData = res.data;
                Highcharts.chart('windspeed-chart', {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Last Week\'s Windspeed'
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
                            return parseFloat(weatherData[key].HWS.av.toFixed(2));
                        })
                    }, {
                        name: 'Min',
                        data: weatherData.sol_keys.map(key => {
                            return parseFloat(weatherData[key].HWS.mn.toFixed(2));
                        })
                    }, {
                        name: 'Max',
                        data: weatherData.sol_keys.map(key => {
                            return parseFloat(weatherData[key].HWS.mx.toFixed(2));
                        })
                    }]
                });
    
            });
    }

}