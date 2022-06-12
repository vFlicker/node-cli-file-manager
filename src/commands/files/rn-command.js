import path from 'path';
import { rename } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class RnCommand extends AbstractCommand {
  #filePath = '';
  #newFileName = '';

  constructor([filePath, newFileName]) {
    super();

    this.#filePath = filePath;
    this.#newFileName = newFileName;
  }

  static get commandName() {
    return 'rn';
  }

  async execute() {
    const workingDirectory = getWorkingDirectory();
    const filePath = path.resolve(workingDirectory, this.#filePath);

    try {
      await rename(filePath, this.#newFileName);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
