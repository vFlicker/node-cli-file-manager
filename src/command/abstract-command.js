export class AbstractCommand {
  constructor() {
    if (new.target === AbstractCommand) {
      throw new Error("Can't instantiate Abstract, only concrete one.");
    }
  }

  static get commandName() {
    throw new Error('Abstract method not implemented: commandName');
  }

  execute() {
    throw new Error('Abstract method not implemented: execute');
  }
}
