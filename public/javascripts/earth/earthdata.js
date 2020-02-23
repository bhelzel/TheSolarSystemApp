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
                    contents = contents.concat(`<li class="event-item"><a href="https://duckduckgo.com/?q=${event.title}&t=ffab&ia=news&iar=news" target="_blank">${event.title}</a></li>`);
                });
                contents.concat('</ul></div>');
                this.container.innerHTML = contents;
            });
    }
}

