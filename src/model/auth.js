export const userAuth = (mail, pass) => firebase.auth().createUserWithEmailAndPassword(mail, pass);

export const userLogin = (mail, pass) => firebase.auth().signInWithEmailAndPassword(mail, pass);

export const authGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const currentUser = () => firebase.auth().currentUser();

// aquí van las funciones que yo considere pero ppalmente son los de firebase
