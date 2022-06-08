import { AbstractCommand } from '../abstract-command.js';

export class UpCommand extends AbstractCommand {
  static get commandName() {
    return 'up';
  }

  execute() {
    process.chdir('../');
  }
}
