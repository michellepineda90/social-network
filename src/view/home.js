export default () => {
  const signup = `
    <img src="../img/png1.png">
      <h1>Bienvenid@ de regreso</h1>
    `;

  const divElemt = document.createElement('div');
  divElemt.classList.add('wrapper');
  divElemt.innerHTML = signup;
  return divElemt;
};
