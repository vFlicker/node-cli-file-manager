import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { stat, unlink } from 'fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class MvCommand extends AbstractCommand {
  #filePath = '';
  #newDir = '';

  constructor([filePath, newDir]) {
    super();

    this.#filePath = filePath;
    this.#newDir = newDir;
  }

  static get commandName() {
    return 'mv';
  }

  async execute() {
    const workingDirectory = getWorkingDirectory();
    const filePath = path.resolve(workingDirectory, this.#filePath);
    const fileName = path.basename(filePath);
    const newDir = path.resolve(workingDirectory, this.#newDir, fileName);

    try {
      const stats = await stat(filePath);
      if (stats.isDirectory()) throw new Error('cp: cannot copy directories');
      const readableStream = createReadStream(filePath);
      const writeStream = createWriteStream(newDir);
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
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
