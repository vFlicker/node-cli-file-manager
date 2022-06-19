import { basename, resolve } from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { stat } from 'fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';

export const cp = async (path, dirPath) => {
  const workingDirectory = getWorkingDirectory();

  try {
    const filePath = resolve(workingDirectory, path);
    const fileName = basename(filePath);
    const newDirPath = resolve(workingDirectory, dirPath, fileName);
    const statsFilePath = await stat(filePath);
    if (statsFilePath.isDirectory())
      throw new Error('cp: cannot copy directories');
    const readableStream = createReadStream(filePath);
    const writeStream = createWriteStream(newDirPath);
    return await new Promise((resolve, reject) => {
      readableStream.on('error', reject);
      writeStream.on('error', reject);
      writeStream.on('finish', resolve);
      readableStream.pipe(writeStream);
    });
  } catch (err) {
    write(stdoutText.sayFailed());
  }
};
