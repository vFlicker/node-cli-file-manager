import path from 'path';
import { copyFile } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CpCommand extends AbstractCommand {
  #filePath = '';
  #newFilePath = '';

  constructor([filePath, newFilePath]) {
    super();

    this.#filePath = filePath;
    this.#newFilePath = newFilePath;
  }

  static get commandName() {
    return 'cp';
  }

  async execute() {
    try {
      const workingDirectory = getWorkingDirectory();
      const filePath = path.resolve(workingDirectory, this.#filePath);
      const newFilePath = path.resolve(workingDirectory, this.#newFilePath);
      await copyFile(filePath, newFilePath);
    } catch (err) {
      console.log(err);
      write(stdoutText.sayFailed());
    }
  }
}
