import { closeApp, getUserName, stdoutText, write } from '../../utils/index.js';

export const close = async () => {
  const userName = getUserName();
  write(stdoutText.sayGoodbye(userName));
  closeApp();
};

Object.defineProperty(close, 'name', {
  get: function () {
    return '.exit';
  },
});
