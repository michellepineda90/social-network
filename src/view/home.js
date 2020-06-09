export default () => {
  const home = `
    <img src="../img/png1.png" class="codebook-logo" alt="8bit-computer">
      <h1>¡Bienvenid@ de regreso!</h1>
    `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('wrapper');
  divElemt.innerHTML = home;
  return divElemt;
};
