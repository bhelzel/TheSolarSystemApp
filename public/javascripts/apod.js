const axios = require('axios');

export default class Apod {

    render() {
        axios.get('/apod')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
            });
    }
}