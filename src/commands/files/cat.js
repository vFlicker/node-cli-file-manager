import { resolve } from 'path';
import { createReadStream } from 'fs';

import { getWorkingDirectory, write } from '../../utils/index.js';

export const cat = async (filePath) => {
  const path = resolve(getWorkingDirectory(), filePath);
  const readableStream = createReadStream(path, 'utf8');
  for await (const line of readableStream) write(line);
};
