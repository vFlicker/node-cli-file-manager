import path from 'path';
import { writeFile } from 'fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class AddCommand extends AbstractCommand {
  #fileName = '';

  constructor([fileName]) {
    super();

    this.#fileName = fileName;
  }

  static get commandName() {
    return 'add';
  }

  async execute() {
    try {
      const workingDirectory = getWorkingDirectory();
      const filePath = path.resolve(workingDirectory, this.#fileName);
      await writeFile(filePath, '', { flag: 'wx' });
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
