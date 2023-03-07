import { header } from './header.js';
import { main } from './main.js';
import './style.css';

function component() {
  //import functions or modules in here
  const content = document.getElementById('content');
  content.appendChild(header());
  content.appendChild(main());
  return content;
}

//call function
document.body.appendChild(component());
