const url = "https://api.le-systeme-solaire.net/rest/bodies/";
const div = document.getElementById('info-display');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el); 
}


fetch(url)
    .then(res => res.json())
    .then(data => {
        let apiData = data.results;
        return apiData.map(function (author) {
            let ele = createNode('div');
            append(div, ele);
        });
    })
    .catch(error => {
        console.log(error);
    });

document.addEventListener('DOMContentLoaded', () => {
    fetch(url);
});
