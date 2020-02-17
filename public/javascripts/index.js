import MissionManifest from './mission_manifest';
import MarsImageSlidebar from './mars_image_slidebar';
import MartianWeather from './martian_weather';
import MartianWindspeed from './martian_windspeed';
import MartianPressure from './martian_air_pressure';
import Apod from './apod';


document.addEventListener('DOMContentLoaded', () => {
    
    const apodContainer = document.getElementById('apod-container');
    new Apod(apodContainer).render();

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
        const form = new FormData(curiosityForm); 
        let sol = form.get('curiosity-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity, sol).render();
    });

    const opportunityForm = document.getElementById('opportunity-form');
    opportunityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(opportunityForm);
        let sol = form.get('opportunity-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity, sol).render();
    });

    const spiritForm = document.getElementById('spirit-form');
    spiritForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(spiritForm);
        let sol = form.get('spirit-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit, sol).render();
    });

    const chartDisplayButton = document.getElementById('chart-display-button');
    const closeCharts = document.getElementById('close-charts');
    const charts = document.getElementsByClassName('chart-container');
    console.log(charts);

    chartDisplayButton.addEventListener('click', (e) => {
        e.preventDefault();
        let scroll = setInterval(() => window.scrollBy(0, 10), 20);
        chartDisplayButton.style.display = 'none';
        closeCharts.style.display = 'flex';
        setTimeout(
            new MartianWeather().render(),
            new MartianWindspeed().render(),
            new MartianPressure().render(),
            250
        );
        const stopScroll = () => {
            clearInterval(scroll);
        };
        setTimeout(
            stopScroll,
            1500
        );
    });

    closeCharts.addEventListener('click', (e) => {
        e.preventDefault();
        let scroll = setInterval(() => window.scrollBy(0, -10), 20);
        let style = () => charts.forEach(chart => {chart.style.display = 'none'});
        chartDisplayButton.style.display = 'inline';
        closeCharts.style.display = 'none';
        
        setTimeout(
            style(),
            250
        );
        const stopScroll = () => {
            clearInterval(scroll);
        };
        setTimeout(
            stopScroll,
            1500
        );
    });
    
});