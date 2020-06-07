import firebasemock from 'firebase-mock';

const mockauth = new firebasemock.MockAuthentication();
const mockfirestore = new firebasemock.MockFirestore();
const mockstorage = new firebasemock.MockStorage();

mockauth.autoFlush();
mockfirestore.autoFlush();
mockstorage.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  () => null,
  () => mockauth,
  () => mockfirestore,
  () => mockstorage,
);
