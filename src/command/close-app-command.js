import { exit, stdoutText, write } from '../utils/index.js';
import { AbstractCommand } from './abstract-command.js';

export class CloseAppCommand extends AbstractCommand {
  #userName = '';

  constructor(userName) {
    super();

    this.#userName = userName;
  }

  static get commandName() {
    return '.exit';
  }

  execute() {
    write(stdoutText.sayGoodbye(this.#userName));
    exit();
  }
}
