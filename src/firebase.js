const firebaseConfig = {
  apiKey: 'AIzaSyArmM8sLQpk2ccSquEg2YShMU6WKNuuwjc',
  authDomain: 'codebook-6f8e0.firebaseapp.com',
  databaseURL: 'https://codebook-6f8e0.firebaseio.com',
  projectId: 'codebook-6f8e0',
  storageBucket: 'codebook-6f8e0.appspot.com',
  messagingSenderId: '156362043403',
  appId: '1:156362043403:web:7b2f124dfa5908e297570e',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
