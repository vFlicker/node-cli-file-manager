import { changeDir, stdoutText, write } from '../../utils/index.js';

export const cd = async (path) => {
  try {
    changeDir(path);
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
