import ImageSlidebar from './image_slidebar';
import MarsImageSlidebar from './mars_image_slidebar';
import MartianWeather from './martian_weather';
import MissionManifest from './mission_manifest';


document.addEventListener('DOMContentLoaded', () => {
    // let infoDisplay = document.getElementById('info-display');
    const marsDisplay = document.getElementById('mars-display');
    // const missionManifest = document.getElementById('mission-manifest');
    const curiosityButton = document.getElementById('curiosity-button');
    curiosityButton.addEventListener('click', (e) => {
        console.log(e);
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity).render();
    });

    const opportunityButton = document.getElementById('opportunity-button');
    opportunityButton.addEventListener('click', (e) => {
        console.log(e);
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity).render();
    });

    const spiritButton = document.getElementById('spirit-button');
    spiritButton.addEventListener('click', (e) => {
        console.log(e);
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit).render();
    });
    // new MarsImageSlidebar(marsDisplay, "opportunity").render();
    // new MissionManifest(missionManifest, "curiosity").render();
    // new MartianWeather(martianWeather).render();
});