import { resolve } from 'path';
import { createReadStream } from 'fs';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const cat = async (filePath) => {
  try {
    const path = resolve(getWorkingDirectory(), filePath);
    const readableStream = createReadStream(path, 'utf8');
    for await (const line of readableStream) write(line);
  } catch (error) {
    write(stdoutText.sayFailed());
  }
}