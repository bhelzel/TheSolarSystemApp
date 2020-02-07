const axios = require('axios');

export default class MartianWeather {
    render() {
        
        let weatherData;

        axios.get('/martianweather')
            .then(res => {
                weatherData = res.data;
                Highcharts.chart('weather-chart', {
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Last Week\'s Temperatures'
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
                            text: 'Temperature (°F)'
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
                        name: 'Average Air Temperature',
                        data: weatherData.sol_keys.map(key => {
                            return weatherData[key].AT.av;
                        })
                    }, {
                        name: 'Low',
                        data: weatherData.sol_keys.map(key => {
                            return weatherData[key].AT.mn;
                    })
                    }, {
                        name: 'High',
                        data: weatherData.sol_keys.map(key => {
                            return weatherData[key].AT.mx;
                        })
                    }]
                });
            });    
    }

}