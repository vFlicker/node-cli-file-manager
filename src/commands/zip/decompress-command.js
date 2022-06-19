import { basename, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';

import { getWorkingDirectory } from '../../utils/index.js';

export const decompress = async (path, newPath) => {
  const workingDirectory = getWorkingDirectory();
  const filePath = resolve(workingDirectory, path);
  const fileName = basename(filePath).split('.gz')[0];
  const newDirPath = resolve(workingDirectory, newPath, fileName);
  const readable = createReadStream(filePath);
  const writable = createWriteStream(newDirPath);
  await pipeline(readable, createBrotliDecompress(), writable);
};
