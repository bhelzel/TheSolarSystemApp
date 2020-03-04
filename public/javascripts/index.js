import MissionManifest from './mars/mission_manifest';
import MarsImageSlidebar from './mars/mars_image_slidebar';
import MartianWeather from './mars/martian_weather';
import MartianWindspeed from './mars/martian_windspeed';
import MartianPressure from './mars/martian_air_pressure';
import EarthData from './earth/earthdata';
import Apod from './apod';


document.addEventListener('DOMContentLoaded', () => {
    
    const apodContainer = document.getElementById('apod-container');
    new Apod(apodContainer).render();

    const earthContainer = document.getElementById('earth-data');
    new EarthData(earthContainer).render();

    const manifestDisplay = document.getElementById('manifest-display');
    new MissionManifest(manifestDisplay).render();

    const curiosityManifest = document.getElementById('curiosity-manifest');
    const curiosity = "curiosity";
    new MissionManifest(curiosityManifest, curiosity).render();

    const opportunityManifest = document.getElementById('opportunity-manifest');
    const opportunity = "opportunity";
    new MissionManifest(opportunityManifest, opportunity).render();
    
    const spiritManifest = document.getElementById('spirit-manifest');
    const spirit = "spirit";
    new MissionManifest(spiritManifest, spirit).render();

    const marsDisplay = document.getElementById('mars-display');

    const curiosityForm = document.getElementById('curiosity-form');
    curiosityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity).render();
    });

    const opportunityForm = document.getElementById('opportunity-form');
    opportunityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity).render();
    });

    const spiritForm = document.getElementById('spirit-form');
    spiritForm.addEventListener('submit', (e) => {
        e.preventDefault();
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit).render();
    });

    const chartDisplayButton = document.getElementById('chart-display-button');
    chartDisplayButton.addEventListener('click', (e) => {
        e.preventDefault();
        chartDisplayButton.style.display = 'none';
        new MartianWeather().render();
        new MartianWindspeed().render();
        new MartianPressure().render();
    });
    
});