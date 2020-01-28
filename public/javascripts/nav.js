import MarsImageSlidebar from './mars_image_slidebar';

const marsDisplay = document.getElementById('mars-display');

documment.getElementById('curiosity-button').onClick = () => {
    const curiosity = "curiosity";
    new MarsImageSlidebar(marsDisplay, curiosity).render();
};

documment.getElementById('opportunity-button').onClick = () => {
    const opportunity = "opportunity";
    new MarsImageSlidebar(marsDisplay, opportunity).render();
};

documment.getElementById('spirit-button').onClick = () => {
    const spirit = "spirit";
    new MarsImageSlidebar(marsDisplay, spirit).render();
};