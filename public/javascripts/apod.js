const axios = require('axios');

export default class Apod {

    constructor(container) {
        this.container = container;
    }

    render() {
        axios.get('/apod')
            .then(res => {
                let contents = '';
                contents = contents.concat(`<div class="apod-explanation"><p class="apod-text">${res.data.explanation}</p></div>`);
                contents = contents.concat(`<div class="apod-photo"><img src="${res.data.url}" /></div>`);
                this.container.innerHTML = contents;  
            })
            .catch (function (error) {
                console.log(error);
            });
        
    }
}

