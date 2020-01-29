const axios = require('axios');

export default class MarsImageSlidebar {

    constructor(container, rover="curiosity") {
        this.container = container;
        this.container.innerHTML = '';
        this.rover = rover;
    }

    render() {
        let links = '';
        // console.log(this.rover);
        axios.get(`/roverphotos/${this.rover}`)
            .then(res => {
                res.data.photos.forEach(photo => {
                    links = links.concat(`<img class="rover-image" src=${photo.img_src} />`);
                });
                this.container.innerHTML = links;
            })
            .catch(function (error) {
                console.log(error);
            }); 

    }
}