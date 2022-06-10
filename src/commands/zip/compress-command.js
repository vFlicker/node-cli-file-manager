import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import { createBrotliCompress } from 'zlib';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CompressCommand extends AbstractCommand {
  #filePath = '';
  #newFilePath = '';

  constructor([fileName, newFilePath]) {
    super();

    this.#filePath = fileName;
    this.#newFilePath = newFilePath;
  }

  static get commandName() {
    return 'compress';
  }

  async execute() {
    const pipelinePromise = promisify(pipeline);
    const workingDirectory = getWorkingDirectory();
    const inputFilePath = path.resolve(workingDirectory, this.#filePath);
    const outputFilePath = path.resolve(workingDirectory, this.#newFilePath);
    const readable = createReadStream(inputFilePath);
    const writable = createWriteStream(outputFilePath);

    try {
      await pipelinePromise(readable, createBrotliCompress(), writable);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
