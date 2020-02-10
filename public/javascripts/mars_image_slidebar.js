const axios = require('axios');

export default class MarsImageSlidebar {

    constructor(container, rover, sol) {
        this.container = container;
        this.container.innerHTML = '';
        this.rover = rover;
        this.sol = sol;
    }

    render() {
        let links = '';
        axios.get(`/roverphotos/${this.rover}/${this.sol}`)
            .then(res => {
                (res.data.photos.length < 1 ? console.log('no-photos') :
                res.data.photos.forEach(photo => {
                    links = links.concat(`<img class="rover-image" src=${photo.img_src} />`);
                }));
                this.container.innerHTML = links;
            })
            .catch(function (error) {
                console.log(error);
            }); 

    }
}