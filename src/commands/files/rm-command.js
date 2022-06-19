import { resolve } from 'path';
import { unlink } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const rm = async (path) => {
  try {
    const filePath = resolve(getWorkingDirectory(), path);
    await unlink(filePath);
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
