import { closeApp, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CloseCommand extends AbstractCommand {
  #userName = '';

  constructor(userName) {
    super();

    this.#userName = userName;
  }

  static get commandName() {
    return '.exit';
  }

  async execute() {
    write(stdoutText.sayGoodbye(this.#userName));
    closeApp();
  }
}
