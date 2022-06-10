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
    const inputFilePath = path.resolve(workingDirectory, this.#zipFilePath);
    const outputFilePath = path.resolve(workingDirectory, this.#newFilePath);
    const readable = createReadStream(inputFilePath);
    const writable = createWriteStream(outputFilePath);

    try {
      await pipelinePromise(readable, createBrotliDecompress(), writable);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
