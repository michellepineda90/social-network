import { changeTmp } from './router.js';
import { initFirebase } from './firebase.js';

const init = () => {
  initFirebase();
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};

window.addEventListener('load', init);
