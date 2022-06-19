import { basename, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';

import { getWorkingDirectory } from '../../utils/index.js';

export const cp = async (path, dirPath) => {
  const workingDirectory = getWorkingDirectory();
  const filePath = resolve(workingDirectory, path);
  const fileName = basename(filePath);
  const newDirPath = resolve(workingDirectory, dirPath, fileName);
  const readStream = createReadStream(filePath);
  const writeStream = createWriteStream(newDirPath, { flags: 'wx' });
  await pipeline(readStream, writeStream);
};
