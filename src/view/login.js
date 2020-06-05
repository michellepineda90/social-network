export default () => {
  const login = `
      <img src="../img/png1.png">
      <h1>&lt;CodeBook&gt;</h1>
      <p>¡Bienvenid@ coder!<p>
      <form>
        <input type="email" id="email" name="email" required placeholder="Correo electrónico">
        <input type="password" id="password" name="password" required placeholder="Contraseña">
        <button>Log in</button>
      </form>
      <p>O bien ingresa con...</p>
      <div class ="social-media">
        <i class="fab fa-google-plus-g"></i>
        <i class="fab fa-facebook"></i>
      </div>
      <p>¿No tienes una cuenta? <a href="#/signup">Regístrate</a></p>
    `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('wrapper');
  divElemt.innerHTML = login;
  return divElemt;
};
