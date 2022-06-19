import { resolve } from 'path';

import { getWorkingDirectory } from '../../utils/index.js';
import { cp } from './cp.js';
import { rm } from './rm.js';

export const mv = async (path, dirPath) => {
  const filePath = resolve(getWorkingDirectory(), path);
  await cp(path, dirPath);
  await rm(filePath);
};
