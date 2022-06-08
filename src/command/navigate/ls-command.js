import { AbstractCommand } from '../abstract-command.js';

export class LsCommand extends AbstractCommand {
  static get commandName() {
    return 'ls';
  }

  execute() {}
}
