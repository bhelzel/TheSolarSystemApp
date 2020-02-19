const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables

app.use(express.static('public'));

app.get('/', (request, response) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/apod', (request, response) => {
  const url = "https://api.nasa.gov/planetary/apod?api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs";
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      response.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/earthevents', (request, response) => {
  const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=10&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs";

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      response.send(data.events);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/photos', (req, response) => {
  
  const url = "https://images-api.nasa.gov/search?q=Earth";

  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => { 
      let apiData = data.collection.items;
      response.send(apiData);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/roverphotos/:rover/:sol', (request, response) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${request.params.rover}/photos?sol=${request.params.sol}&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      response.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});

app.get('/missionmanifest/:rover', (request, response) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${request.params.rover}?api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs`;
  
  fetch(url)
    .then(res => {  
      return res.json();
    })
    .then(data => {
      response.send(data);
    })
    .catch(errors => {
      console.log(errors);
    });

});

app.get('/martianweather', (request, response) => {
  const url = "https://api.nasa.gov/insight_weather/?api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs&feedtype=json&ver=1.0";
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      response.send(data);
    })
    .catch(error => {
      console.log(error);
    });
});


app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});
