class ImageSlidebar {

    constructor(container) {
        this.container = container;
        // this.apiData;
        
    }

    render() {
        const url = "https://images-api.nasa.gov/search?q=Earth";
        let links = '';
        // api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                let apiData = data.collection.items;
                console.log(apiData);
                apiData.forEach(img => {
                    img.links.forEach(link => {
                        links = links.concat(`<img src=${link.href}/> `);
                    });       
                });
                console.log(links);
                this.container.innerHTML = links;
            })
            .catch(error => {
                console.log(error);
            });
        
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // let infoDisplay = document.getElementById('info-display');
    // // let marsDisplay = document.getElementById('mars-display');
    // new ImageSlidebar(infoDisplay).render();
    // new MarsImageSlidebar(marsDisplay).render();
});
