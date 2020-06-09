import { userAuth } from '../src/model/auth';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication(); // or firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  () => null,
  () => mockauth,
);

describe('signInUser', () => {
  it('Should sign in a user with email and password', () => userAuth('front@end.la', '123456')
    .then((user) => {
      expect(user.email).toBe('front@end.la');
    }));
});
