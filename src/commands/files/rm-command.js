import path from 'path';
import { unlink } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class RmCommand extends AbstractCommand {
  #filePath = '';

  constructor([filePath]) {
    super();

    this.#filePath = filePath;
  }

  static get commandName() {
    return 'rm';
  }

  async execute() {
    try {
      const workingDirectory = getWorkingDirectory();
      const filePath = path.resolve(workingDirectory, this.#filePath);
      await unlink(filePath);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
