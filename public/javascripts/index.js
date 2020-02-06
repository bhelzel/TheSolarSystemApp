import MissionManifest from './mission_manifest';
import MarsImageSlidebar from './mars_image_slidebar';
import MartianWeather from './martian_weather';
import MartianWindspeed from './martian_windspeed';
import MartianPressure from './martian_air_pressure';


document.addEventListener('DOMContentLoaded', () => {
    
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
    const curiosityButton = document.getElementById('curiosity-button');
    curiosityButton.addEventListener('click', (e) => {
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity).render();
    });

    const opportunityButton = document.getElementById('opportunity-button');
    opportunityButton.addEventListener('click', (e) => {
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity).render();
    });

    const spiritButton = document.getElementById('spirit-button');
    spiritButton.addEventListener('click', (e) => { 
        manifestDisplay.style.display = 'none'; 
        marsDisplay.style.display = 'flex';
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit).render();
    });

    const chartDisplayButton = document.getElementById('chart-display-button');
    chartDisplayButton.addEventListener('click', (e) => {
        let scroll = setInterval(() => window.scrollBy(0, 10), 20);
        chartDisplayButton.style.display = 'none';
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
    
    // new MarsImageSlidebar(marsDisplay, "opportunity").render();
    // new MissionManifest(missionManifest, "curiosity").render();
    // new MartianWeather(martianWeather).render();
});