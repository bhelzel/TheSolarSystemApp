const axios = require('axios');

export default class MissionManifest {
    
    constructor(container, rover) {
        this.container = container;
        this.rover = rover;
    }

    render() {
        axios.get(`/missionmanifest/${this.rover}`)
            .then(res => {
                let contents = `<div class="manifest-div">`;
                contents = contents.concat(`<h3 class="rover-name">${res.data.photo_manifest.name}</h3>`);
                contents = contents.concat(`<h4 class="launch-data>${res.data.photo_manifest.launch_date}</h4>`);
                contents = contents.concat(`<h4 class="landing-date">${res.data.photo_manifest.landing_date}</h4>`);
                contents = contents.concat(`<h4 class="max-sol">${res.data.photo_manifest.max_sol}</h4>`);
                contents = contents.concat(`<h4 class="status">${res.data.photo_manifest.status}</h4>`);
                contents = contents.concat(`<h4 class="total-photos">${res.data.photo_manifest.total_photos}</h4></div>`);
                this.container.innerHTML = contents;
            });
    }
}