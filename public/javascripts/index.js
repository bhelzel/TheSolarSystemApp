import ImageSlidebar from './image_slidebar';
import MarsImageSlidebar from './mars_image_slidebar';
import MartianWeather from './martian_weather';
import MissionManifest from './mission_manifest';
import MartianWindspeed from './martian_windspeed';
import MartianPressure from './martian_air_pressure';


document.addEventListener('DOMContentLoaded', () => {
    // let infoDisplay = document.getElementById('info-display');
    const marsDisplay = document.getElementById('mars-display');
    // const missionManifest = document.getElementById('mission-manifest');
    const curiosityButton = document.getElementById('curiosity-button');
    curiosityButton.addEventListener('click', (e) => {
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity).render();
    });

    const opportunityButton = document.getElementById('opportunity-button');
    opportunityButton.addEventListener('click', (e) => {
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity).render();
    });

    const spiritButton = document.getElementById('spirit-button');
    spiritButton.addEventListener('click', (e) => {  
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit).render();
    });

    const chartDisplayButton = document.getElementById('chart-display-button');
    chartDisplayButton.addEventListener('click', (e) => {
        window.scroll(0, 600);
        setTimeout(
            new MartianWeather().render(),
            new MartianWindspeed().render(),
            new MartianPressure().render(),
            300
        );
        
    });
    
    // new MarsImageSlidebar(marsDisplay, "opportunity").render();
    // new MissionManifest(missionManifest, "curiosity").render();
    // new MartianWeather(martianWeather).render();
});