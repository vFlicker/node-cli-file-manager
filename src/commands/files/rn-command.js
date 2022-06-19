import path from 'path';
import { rename } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class RnCommand extends AbstractCommand {
  #fileName = '';
  #newFileName = '';

  constructor([fileName, newFileName]) {
    super();

    this.#fileName = fileName;
    this.#newFileName = newFileName;
  }

  static get commandName() {
    return 'rn';
  }

  async execute() {
    try {
      const filePath = path.resolve(getWorkingDirectory(), this.#fileName);
      await rename(filePath, this.#newFileName);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
