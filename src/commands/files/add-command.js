import path from 'path';
import { writeFile } from 'fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class AddCommand extends AbstractCommand {
  #filePath = '';

  constructor([filePath]) {
    super();

    this.#filePath = filePath;
  }

  static get commandName() {
    return 'add';
  }

  async execute() {
    try {
      const filePath = path.resolve(getWorkingDirectory(), this.#filePath);
      await writeFile(filePath, '', { flag: 'wx' });
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
