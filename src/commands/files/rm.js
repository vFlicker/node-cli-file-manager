import { resolve } from 'path';
import { unlink } from 'fs/promises';

import { getWorkingDirectory } from '../../utils/index.js';

export const rm = async (path) => {
  const filePath = resolve(getWorkingDirectory(), path);
  await unlink(filePath);
};
