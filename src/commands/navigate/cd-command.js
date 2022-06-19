import { changeDir, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CdCommand extends AbstractCommand {
  #path = '';

  constructor([path]) {
    super();

    this.#path = path;
  }

  static get commandName() {
    return 'cd';
  }

  async execute() {
    try {
      changeDir(this.#path);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
