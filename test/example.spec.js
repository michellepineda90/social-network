import '../src/model/__mocks__/mocks';

// signup function to be tested
import models from '../src/model/signup-model.js';

describe('emailSignup function', () => {
  it('Should sign up with hi@hola.com and password: misil123', () => models.emailSignUp('hi@hola.com', 'misil123')
    .then((obj) => {
      expect(obj.email).toBe('hi@hola.com');
    }));
});
