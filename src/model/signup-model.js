import { auth } from '../firebase.js';

const emailSignUp = (email, passwd) => auth.createUserWithEmailAndPassword(email, passwd);

const updateDisplayName = name => auth.currentUser.updateProfile({
  displayName: name,
});

export default { emailSignUp, updateDisplayName };
