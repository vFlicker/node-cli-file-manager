import { changeDir } from '../../utils/index.js';

export const cd = async (path) => {
  changeDir(path);
};
