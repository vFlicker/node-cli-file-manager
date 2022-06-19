import { closeApp } from '../../utils/index.js';

export const close = async () => {
  closeApp();
};

Object.defineProperty(close, 'name', {
  get: function () {
    return '.exit';
  },
});
