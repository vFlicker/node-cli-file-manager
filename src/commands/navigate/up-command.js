import { changeDir } from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class UpCommand extends AbstractCommand {
  static get commandName() {
    return 'up';
  }

  async execute() {
    changeDir('..');
  }
}
