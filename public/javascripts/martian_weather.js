const axios = require('axios');

export default class MartianWeather {
    constructor(container){
        this.container = container;
    }

    render() {
        axios.get('/martianweather')
            .then(res => {
                console.log(res);
            });
    }
}