const axios = require('axios');

export default class EarthData {
    constructor(container) {
        this.container = container;
    }
    
    render() {
        let contents = '<div class="event-container><p class="event-title">Major Geological and Weather Events:<p><ul class="event-list>';

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

