import path from 'path';
import { copyFile, unlink } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class MvCommand extends AbstractCommand {
  #filePath = '';
  #newFilePath = '';

  constructor([filePath, newFilePath]) {
    super();

    this.#filePath = filePath;
    this.#newFilePath = newFilePath;
  }

  static get commandName() {
    return 'mv';
  }

  async execute() {
    try {
      const workingDirectory = getWorkingDirectory();
      const filePath = path.resolve(workingDirectory, this.#filePath);
      const newFilePath = path.resolve(workingDirectory, this.#newFilePath);
      await copyFile(filePath, newFilePath);
      await unlink(filePath);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
