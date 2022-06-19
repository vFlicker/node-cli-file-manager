import { resolve } from 'path';
import { rename } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const rn = async (fileName, newFileName) => {
  try {
    const filePath = resolve(getWorkingDirectory(), fileName);
    await rename(filePath, newFileName);
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
