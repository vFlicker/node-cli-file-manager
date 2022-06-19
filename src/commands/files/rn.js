import { resolve } from 'path';
import { rename } from 'fs/promises';

import { getWorkingDirectory } from '../../utils/index.js';

export const rn = async (fileName, newFileName) => {
  const filePath = resolve(getWorkingDirectory(), fileName);
  await rename(filePath, newFileName);
};
