import { basename, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { createBrotliCompress } from 'zlib';

import { getWorkingDirectory } from '../../utils/index.js';

export const compress = async (path, newDir) => {
  const pipelinePromise = promisify(pipeline);
  const workingDirectory = getWorkingDirectory();
  const filePath = resolve(workingDirectory, path);
  const fileName = basename(filePath);
  const newDirPath = resolve(workingDirectory, newDir, `${fileName}.gz`);
  const readable = createReadStream(filePath);
  const writable = createWriteStream(newDirPath);
  await pipelinePromise(readable, createBrotliCompress(), writable);
};
