import { userAuth, userLogin } from '../model/auth.js';

export const signupOnSubmit = (form) => {
  const email = form.querySelector('#email').value;
  const pass = form.querySelector('#password').value;
  userAuth(email, pass)
    .then((userCredential) => {
      form.reset();
      window.location.href('#/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export const loginOnSubmit = (form) => {
  const email = form.querySelector('#email').value;
  const pass = form.querySelector('#password').value;
  userLogin(email, pass)
    .then((user) => {
      console.log(user);
      window.location.href('#/home');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// aquí voy a unir la data de la vista y la función del modelo
