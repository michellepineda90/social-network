import { loginOnSubmit } from '../controller/auth.js';

export default () => {
  const login = `
      <img src="../img/png1.png" class="codebook-logo" alt="8bit-computer">
      <h1>&lt;CodeBook&gt;</h1>
      <p>¡Bienvenid@ coder!<p>
      <form id="login-form">
        <input type="email" id="email" name="email" required placeholder="Correo electrónico">
        <input type="password" id="password" name="password" required placeholder="Contraseña">
        <button class="login-btn">Log in</button>
      </form>
      <p>O ingresa con...</p>
      <div class ="social-media">
        <button class="google-btn"><img src="../img/google.png" alt="google-logo"></button>
      </div>
      <p>¿No tienes una cuenta? <a href="#/signup">Regístrate</a></p>
    `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('wrapper');
  divElemt.innerHTML = login;

  const loginForm = divElemt.querySelector('#login-form');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    loginOnSubmit(loginForm);
    loginForm.reset();
    window.location.href = '#/home';
  });

  return divElemt;
};
