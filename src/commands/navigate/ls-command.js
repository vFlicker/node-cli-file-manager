import { readdir } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class LsCommand extends AbstractCommand {
  static get commandName() {
    return 'ls';
  }

  async execute() {
    try {
      const files = await readdir(getWorkingDirectory());
      const filesNames = [];
      for (const file of files) filesNames.push(file);
      write(filesNames);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
