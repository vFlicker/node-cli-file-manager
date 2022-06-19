import { resolve } from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const hash = async (path) => {
  const filePath = resolve(getWorkingDirectory(), path);
  const hash = createHash('sha256');
  const readable = createReadStream(filePath);
  readable.on('data', (chunk) => hash.update(chunk));
  readable.on('end', () => write(hash.digest('hex')));
  readable.on('error', () => write(stdoutText.sayFailed()));
};
