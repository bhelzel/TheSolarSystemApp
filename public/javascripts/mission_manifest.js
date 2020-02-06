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
                contents = contents.concat(`<p class="manifest-data" id="rover-name">Mission: ${res.data.photo_manifest.name}</p>`);
                contents = contents.concat(`<p class="manifest-data" id="launch-data>Launch Date: ${res.data.photo_manifest.launch_date}</p>`);
                contents = contents.concat(`<p class="manifest-data" id="landing-date">Landing Date: ${res.data.photo_manifest.landing_date}</p>`);
                contents = contents.concat(`<p class="manifest-data" id="max-sol">Max Sol: ${res.data.photo_manifest.max_sol}</p>`);
                contents = contents.concat(`<p class="manifest-data" id="status">Status: ${res.data.photo_manifest.status}</p>`);
                contents = contents.concat(`<p class="manifest-data" id="total-photos">Total Photos: ${res.data.photo_manifest.total_photos}</p></div>`);
                this.container.innerHTML = contents;
            });
    }
}