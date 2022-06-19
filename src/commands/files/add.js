import { resolve } from 'path';
import { writeFile } from 'fs/promises';

import { getWorkingDirectory } from '../../utils/index.js';

export const add = async (filePath) => {
  const path = resolve(getWorkingDirectory(), filePath);
  await writeFile(path, '', { flag: 'wx' });
};
