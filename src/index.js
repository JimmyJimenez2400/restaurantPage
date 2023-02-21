import { header } from './header.js';

function component() {
  //import functions or modules in here
  const content = document.getElementById('content');
  content.appendChild(header());

  return content;
}

//call function
document.body.appendChild(component());
