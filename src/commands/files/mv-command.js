import { basename, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { stat, unlink } from 'fs/promises';

import { getWorkingDirectory } from '../../utils/index.js';

export const mv = async (path, dirPath) => {
  const workingDirectory = getWorkingDirectory();
  const filePath = resolve(workingDirectory, path);
  const fileName = basename(filePath);
  const newDirPath = resolve(workingDirectory, dirPath, fileName);
  const stats = await stat(filePath);
  if (stats.isDirectory()) throw new Error('cp: cannot copy directories');
  const readableStream = createReadStream(filePath);
  const writeStream = createWriteStream(newDirPath);
  return await new Promise((resolve, reject) => {
    readableStream.on('error', reject);
    readableStream.on('end', async () => {
      await unlink(filePath);
      resolve();
    });
    writeStream.on('error', reject);
    writeStream.on('finish', resolve);
    readableStream.pipe(writeStream);
  });
};
