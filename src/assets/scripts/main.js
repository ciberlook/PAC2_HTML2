/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

const mButton = document.querySelector('.sandwich');
const menu = document.querySelector('.menu');

mButton.addEventListener(
  'click',
  (e) => {
    if (
      e.target.classList[0] === 'sandwich__bar1' ||
      e.target.classList[0] === 'sandwich__bar2' ||
      e.target.classList[0] === 'sandwich__bar3'
    )
      e.target.parentElement.classList.toggle('change');
    else e.target.classList.toggle('change');

    menu.classList.toggle('menu--hidden');
  },
  false,
);
