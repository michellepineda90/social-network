import { auth } from '../firebase';

const authEmailPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);

const authGmail = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return auth.signInWithPopup(provider);
};

export default { authEmailPassword, authGmail };
