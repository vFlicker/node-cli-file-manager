import { readdir } from 'fs/promises';
import { EOL } from 'os';

import { getWorkingDirectory, write, WriteFlag } from '../../utils/index.js';

export const ls = async () => {
  const files = await readdir(getWorkingDirectory());
  const filesNames = [];
  for (const file of files) filesNames.push(file);
  write(filesNames.join(EOL), WriteFlag.SUCCESS);
};
