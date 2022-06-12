import path from 'path';
import { createReadStream } from 'fs';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CatCommand extends AbstractCommand {
  #filePath = '';

  constructor([filePath]) {
    super();

    this.#filePath = filePath;
  }

  static get commandName() {
    return 'cat';
  }

  async execute() {
    try {
      const filePath = path.resolve(getWorkingDirectory(), this.#filePath);
      const readableStream = createReadStream(filePath, 'utf8');
      for await (const line of readableStream) write(line);
    } catch (error) {
      write(stdoutText.sayFailed());
    }
  }
}
