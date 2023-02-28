import { createHTMLElement } from './header.js';

export function footer() {
  const footer = createHTMLElement('div', 'id', 'footer');

  const section1 = footer.appendChild(
    createHTMLElement('section', 'class', 'section1')
  );
  const section2 = footer.appendChild(
    createHTMLElement('section', 'class', 'section2')
  );
  const section3 = footer.appendChild(
    createHTMLElement('section', 'class', 'section3')
  );
  return footer;
}
