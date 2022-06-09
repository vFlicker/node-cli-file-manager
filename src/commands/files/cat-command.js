import path from 'path';
import { createReadStream } from 'fs';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CatCommand extends AbstractCommand {
  #fileName = '';

  constructor([fileName]) {
    super();

    this.#fileName = fileName;
  }

  static get commandName() {
    return 'cat';
  }

  async execute() {
    const workingDirectory = getWorkingDirectory();
    const filePath = path.resolve(workingDirectory, this.#fileName);
    const readableStream = createReadStream(filePath, 'utf8');

    try {
      for await (const line of readableStream) write(line);
    } catch (error) {
      write(stdoutText.sayFailed());
    }
  }
}
