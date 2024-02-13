import './style.css';


const createHomePage = () => {
    const pageTitle = document.createElement('h1');
    const pancakesImg = document.createElement('img');
    const intro = document.createElement('h2');
    const introDescr = document.createElement('p');

    pancakesImg.setAttribute('id', 'pancakes');
    intro.setAttribute('id', 'introduction');
    introDescr.setAttribute('id', 'intro-descr');

    pancakesImg.setAttribute('src', '/src/joseph-gonzalez-zcUgjyqEwe8-unsplash.jpg');
    pancakesImg.setAttribute('alt', 'Photo of blueberry banana pancakes');

    pageTitle.textContent = "Big Danny's Daily Boomin' Brunch House";
    intro.textContent = 'Welcome to your favorite local brunch spot! Getchya some mimosas (bottomless) and homemade pancakes right here';
    introDescr.textContent = "Opened in 1969, Danny's Daily Boomin' Brunch House has been serving it's community \
    proudly for 55 years. This is where ya come to get those delicious greasy pancakes \
    and crush some mimosas to get rid of that nasty hangover and make everything feel okay. \
    Cheers.";

    const introsContainer = document.createElement('div');
    introsContainer.setAttribute('id', 'intros-container');
    introsContainer.appendChild(intro);
    introsContainer.appendChild(introDescr);



    const homeContainer = document.createElement('div');
    homeContainer.setAttribute('id', 'home-container');

    homeContainer.appendChild(pageTitle);
    homeContainer.appendChild(pancakesImg);
    homeContainer.appendChild(introsContainer);
    

    return homeContainer;

}

export { createHomePage };