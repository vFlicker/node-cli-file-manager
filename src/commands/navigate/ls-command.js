import { readdir } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const ls = async () => {
  try {
    const files = await readdir(getWorkingDirectory());
    const filesNames = [];
    for (const file of files) filesNames.push(file);
    write(filesNames);
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
