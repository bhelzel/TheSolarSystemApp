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
    const curiosityForm = document.getElementById('curiosity-form');
    // const curiosityButton = document.getElementById('curiosity-button');
    curiosityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(curiosityForm); 
        // const range = document.getElementsByName('curiosity-range');
        let sol = form.get('curiosity-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const curiosity = "curiosity";
        new MarsImageSlidebar(marsDisplay, curiosity, sol).render();
    });
    const opportunityForm = document.getElementById('opportunity-form');
    // const opportunityButton = document.getElementById('opportunity-button');
    opportunityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(opportunityForm);
        // const range = document.getElementsByName('opportunity-range');
        let sol = form.get('opportunity-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const opportunity = "opportunity";
        new MarsImageSlidebar(marsDisplay, opportunity, sol).render();
    });

    const spiritForm = document.getElementById('spirit-form');
    // const spiritButton = document.getElementById('spirit-button');
    spiritForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const form = new FormData(spiritForm);
        // const range = document.getElementsByName('spirit-range');
        let sol = form.get('spirit-range');
        manifestDisplay.style.display = 'none';
        marsDisplay.style.display = 'flex';
        const spirit = "spirit";
        new MarsImageSlidebar(marsDisplay, spirit, sol).render();
    });
    
    // const curiosityButton = document.getElementById('curiosity-button');
    // curiosityButton.addEventListener('click', (e) => {
    //     manifestDisplay.style.display = 'none';
    //     marsDisplay.style.display = 'flex';
    //     const curiosity = "curiosity";
    //     new MarsImageSlidebar(marsDisplay, curiosity).render();
    // });

    // const opportunityButton = document.getElementById('opportunity-button');
    // opportunityButton.addEventListener('click', (e) => {
    //     manifestDisplay.style.display = 'none';
    //     marsDisplay.style.display = 'flex';
    //     const opportunity = "opportunity";
    //     new MarsImageSlidebar(marsDisplay, opportunity).render();
    // });

    // const spiritButton = document.getElementById('spirit-button');
    // spiritButton.addEventListener('click', (e) => { 
    //     manifestDisplay.style.display = 'none'; 
    //     marsDisplay.style.display = 'flex';
    //     const spirit = "spirit";
    //     new MarsImageSlidebar(marsDisplay, spirit).render();
    // });

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