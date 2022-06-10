import { closeApp, getUserName, stdoutText, write } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class CloseCommand extends AbstractCommand {
  static get commandName() {
    return '.exit';
  }

  async execute() {
    const userName = getUserName();
    write(stdoutText.sayGoodbye(userName));
    closeApp();
  }
}
