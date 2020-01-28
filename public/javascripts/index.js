import ImageSlidebar from './image_slidebar';
import MarsImageSlidebar from './mars_image_slidebar';
import MartianWeather from './martian_weather';


document.addEventListener('DOMContentLoaded', () => {
    // let infoDisplay = document.getElementById('info-display');
    let marsDisplay = document.getElementById('mars-display');
    // let martianWeather = document.getElementById('martian-weather');
    // const curiosity = 'curiosity';
    // new ImageSlidebar(infoDisplay).render();
    new MarsImageSlidebar(marsDisplay).render();
    // new MartianWeather(martianWeather).render();
});
