import { readdir } from 'node:fs/promises';

import { getWorkingDirectory, stdoutText } from '../../utils/index.js';
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
      console.log(filesNames);
    } catch (err) {
      throw new Error(stdoutText.sayFailed());
    }
  }
}
