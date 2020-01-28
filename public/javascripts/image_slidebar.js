const axios = require('axios');

export default class ImageSlidebar {

    constructor(container) {
        this.container = container;
    }

    render() {
        let links = '';
        axios.get('/photos')
            .then(res => {
                res.data.forEach(img => {
                    img.links.forEach(link => {
                        links = links.concat(`<img src=${link.href}/> `);
                    });
                });
                this.container.innerHTML = links;
            })
            .catch(function (error) {
                console.log(error);
            }); 
        
    }
}