import { resolve } from 'path';
import { writeFile } from 'fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const add = async (filePath) => {
  try {
    const path = resolve(getWorkingDirectory(), filePath);
    await writeFile(path, '', { flag: 'wx' });
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
