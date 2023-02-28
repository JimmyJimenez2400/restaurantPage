export function header() {
  const headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header');

  headerContainer.appendChild(navbar());
  return headerContainer;
}

function navbar() {
  const navbar = document.createElement('nav');
  navbar.setAttribute('class', 'navbar');

  const logoImg = document.createElement('img');
  logoImg.setAttribute('class', 'restaurantLogo');
  logoImg.setAttribute('alt', 'restaurant Logo');
  navbar.appendChild(logoImg);

  const unorderedList = document.createElement('ul');
  unorderedList.setAttribute('class', 'unorderedList');
  navbar.appendChild(unorderedList);

  unorderedList.appendChild(createHTMLElement('li', 'class', 'list-item-1'));
  unorderedList.appendChild(createHTMLElement('li', 'class', 'list-item-2'));
  unorderedList.appendChild(createHTMLElement('li', 'class', 'list-item-3'));
  unorderedList.appendChild(createHTMLElement('li', 'class', 'list-item-4'));

  const listItems = unorderedList.querySelectorAll('li');
  listItems[0].appendChild(
    createHTMLElement('a', 'class', 'anchor-tag', 'Home')
  );
  listItems[1].appendChild(
    createHTMLElement('a', 'class', 'anchor-tag', 'About')
  );
  listItems[2].appendChild(
    createHTMLElement('a', 'class', 'anchor-tag', 'Menu')
  );
  listItems[3].appendChild(
    createHTMLElement('a', 'class', 'anchor-tag', 'Contact')
  );
  // .appendChild(createHTMLElement('a', 'class', 'anchor-item', 'Home');

  return navbar;
}

export function createHTMLElement(element, type, className, content) {
  const elementMade = document.createElement(element);
  elementMade.setAttribute(type, className);
  elementMade.textContent = content;

  return elementMade;
}
