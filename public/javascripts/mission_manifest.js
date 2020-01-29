const axios = require('axios');

export default class MissionManifest {
    
    constructor(container, rover) {
        this.container = container;
        this.rover = rover;
    }

    render() {
        axios.get(`/missionmanifest`)
            .then(res => {
                console.log(res);
            });
    }
}