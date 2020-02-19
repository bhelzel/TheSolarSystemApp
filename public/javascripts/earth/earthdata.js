const axios = require('axios');

export default class EarthData {
    constructor(container) {
        this.container = container;
    }
    
    render() {
        let contents = '<div class="event-container><p class="event-title">Major geological and weather events currently taking place on Earth:<p><ul class="event-list>';

        axios.get('/earthevents')
            .then(res => {
                res.data.forEach(event => {
                    contents = contents.concat(`<li class="event-item">${event.title}</li>`);
                });
                contents.concat('</ul></div>');
                this.container.innerHTML = contents;
            });
    }
}

