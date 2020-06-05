export default () => {
  const signup = `
  <div class="wrapper">
    <img src="../img/png1.png">
    <div class="logo">
    <div>
  </div>
  `;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = signup;
  return divElemt;
};
