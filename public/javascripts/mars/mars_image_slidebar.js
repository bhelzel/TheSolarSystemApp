const axios = require('axios');

export default class MarsImageSlidebar {

    constructor(container, rover, sol) {
        this.container = container;
        this.container.innerHTML = '';
        this.rover = rover;
    }

    render() {
        let links = '';
        axios.get(`/roverphotos/${this.rover}`)
            .then(res => {
                new MarsImageSlidebar(this.container, this.rover);
                res.data.photos.forEach(photo => {
                  links = links.concat(`<div><img class="rover-image" src=${photo.img_src} />
                  <p class="rover-cam">Camera: ${photo.camera.full_name}</p>`);
                });
                this.container.innerHTML = links;
            })
            .catch(function (error) {
                console.log(error);
            });

    }
}
