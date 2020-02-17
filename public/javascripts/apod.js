const axios = require('axios');

export default class Apod {

    constructor(container) {
        this.container = container;
    }

    render() {
        axios.get('/apod')
            .then(res => {
                console.log(res);
                let contents = `<div class="apod-img">`;
                contents = contents.concat(`<img src="${res.data.url}"/></div>`);
                contents = contents.concat(`<div class="apod-explanation">`);
                contents = contents.concat(`<p class="apod-text">${res.data.explanation}</p></div>`);
                this.container.innerHTML = contents;  
            })
            .catch (function (error) {
                console.log(error);
            });
        
    }
}