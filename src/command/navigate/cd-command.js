import { AbstractCommand } from '../abstract-command.js';

export class CdCommand extends AbstractCommand {
  static get commandName() {
    return 'cd';
  }

  execute() {}
}
