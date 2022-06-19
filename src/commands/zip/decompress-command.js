import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { createBrotliDecompress } from 'zlib';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class DecompressCommand extends AbstractCommand {
  #zipFilePath = '';
  #newFilePath = '';

  constructor([zipFilePath, newFilePath]) {
    super();

    this.#zipFilePath = zipFilePath;
    this.#newFilePath = newFilePath;
  }

  static get commandName() {
    return 'decompress';
  }

  async execute() {
    const pipelinePromise = promisify(pipeline);
    const workingDirectory = getWorkingDirectory();

    try {
      const filePath = path.resolve(workingDirectory, this.#zipFilePath);
      const fileName = path.basename(filePath).split('.gz')[0];
      const newDirPath = path.resolve(
        workingDirectory,
        this.#newFilePath,
        fileName,
      );
      const readable = createReadStream(filePath);
      const writable = createWriteStream(newDirPath);
      await pipelinePromise(readable, createBrotliDecompress(), writable);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
