import { resolve } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

import { getWorkingDirectory, write, WriteFlag } from '../../utils/index.js';

export const hash = async (path) => {
  const filePath = resolve(getWorkingDirectory(), path);
  const readStream = createReadStream(filePath);
  const hashStream = createHash('sha256');
  await pipeline(readStream, hashStream);
  write(hashStream.digest('hex'), WriteFlag.SUCCESS);
};
