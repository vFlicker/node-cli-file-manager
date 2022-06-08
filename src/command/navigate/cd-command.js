import { stdoutText, write } from '../../utils/index.js';
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

  execute() {
    try {
      process.chdir(this.#path);
    } catch (err) {
      write(stdoutText.sayFailed());
    }
  }
}
