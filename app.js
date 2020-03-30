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
  const url = "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events?limit=6&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs";

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

app.get('/photos', (request, response) => {
  
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

app.get('/roverphotos/:rover', (request, response) => {
  let url;
  if(request.params.rover === 'curiosity') {
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs';
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
  } else if (request.params.rover === 'opportunity') {
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=300&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs';
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
  } else {
    url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=460&api_key=Al5EpS4ebP8ORPxQiHOxikLYeSwEjNpAGk5Nd2bs';
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
  }
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
