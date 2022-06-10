import path from 'path';
import { createHash } from 'crypto';
import { createReadStream } from 'fs';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class HashCommand extends AbstractCommand {
  #filePath = '';

  constructor([filePath]) {
    super();

    this.#filePath = filePath;
  }

  static get commandName() {
    return 'hash';
  }

  async execute() {
    try {
      const workingDirectory = getWorkingDirectory();
      const filePath = path.resolve(workingDirectory, this.#filePath);
      const hash = createHash('sha256');
      const readableStream = createReadStream(filePath);
      readableStream.on('data', (chunk) => hash.update(chunk));
      readableStream.on('end', () => write(hash.digest('hex')));
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
