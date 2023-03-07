import { createHTMLElement } from './header.js';
import Owners from './img/Owners.png';
import Store from './img/streetViewOutside.png';

export function main() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');

  main.appendChild(Home());
  // main.appendChild(about());
  // main.appendChild(menu());

  return main;
}

//Home

function Home() {
  const home = document.createElement('div');
  home.setAttribute('class', 'home');

  home.appendChild(
    createHTMLElement('h1', 'class', 'title', "Welcome to Angelina's Pizzeria!")
  );
  home.appendChild(
    createHTMLElement('button', 'class', 'see-menu', 'See Menu')
  );

  // const seeMenuBtn = document.getElementsByClassName('see-menu');

  // seeMenuBtn.addEventListener('click', sayHello);

  return home;
}

function about() {
  const about = createHTMLElement('div', 'class', 'about');
  const aboutImgLeft = createHTMLElement('div', 'class', 'aboutImgLeft');
  about.appendChild(aboutImgLeft);

  const aboutImg = aboutImgLeft.appendChild(
    createHTMLElement('img', 'class', 'about-img')
  );

  aboutImg.setAttribute('alt', 'About-Img');
  aboutImg.src = Owners;

  const aboutDetailsRight = about.appendChild(
    createHTMLElement('div', 'class', 'aboutDetailsRight')
  );

  aboutDetailsRight.appendChild(
    createHTMLElement('h2', 'class', 'about-h2', "Let's tell you about us!")
  );
  aboutDetailsRight.appendChild(
    createHTMLElement(
      'p',
      'class',
      'about-p',
      "John's Pizzeria is an incredible pizza place, that has been around since 1965. Run by us mother-daughter duo serve the typical New York Style Pizza. Watch us make your pizza and chitchat! The whole purpose of this pizza is of course to serve your hunger but as well connecting a community together"
    )
  );

  return about;
}

function sayHello() {
  alert('Hello World!');
}

//About

//Menu

//Contact
