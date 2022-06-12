import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { createBrotliCompress } from 'zlib';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CompressCommand extends AbstractCommand {
  #filePath = '';
  #newZipFilePath = '';

  constructor([fileName, newZipFilePath]) {
    super();

    this.#filePath = fileName;
    this.#newZipFilePath = newZipFilePath;
  }

  static get commandName() {
    return 'compress';
  }

  async execute() {
    const pipelinePromise = promisify(pipeline);
    const workingDirectory = getWorkingDirectory();

    try {
      const filePath = path.resolve(workingDirectory, this.#filePath);
      const fileName = path.basename(filePath);
      const newDirPath = path.resolve(
        workingDirectory,
        this.#newZipFilePath,
        `${fileName}.gz`,
      );
      const readable = createReadStream(filePath);
      const writable = createWriteStream(newDirPath);
      await pipelinePromise(readable, createBrotliCompress(), writable);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
