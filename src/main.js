import { createHTMLElement } from './header.js';

export function main() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');

  // main.appendChild(Home());
  main.appendChild(about());

  return main;
}

//Home

function Home() {
  const home = document.createElement('div');
  home.setAttribute('class', 'home');

  home.appendChild(
    createHTMLElement('h1', 'class', 'title', "Welcome to John's Pizzeria!")
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
  const aboutImg = about.appendChild(
    createHTMLElement('img', 'class', 'about-img')
  );

  aboutImg.setAttribute('alt', 'About-Img');

  const aboutDetails = about.appendChild(
    createHTMLElement('div', 'class', 'about-details')
  );

  aboutDetails.appendChild(
    createHTMLElement('h2', 'class', 'about-h2', "Let's tell you about us!")
  );
  aboutDetails.appendChild(
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
