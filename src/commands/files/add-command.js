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
    const filePath = path.resolve(getWorkingDirectory(), this.#fileName);

    try {
      await writeFile(filePath, '', { flag: 'wx' });
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
