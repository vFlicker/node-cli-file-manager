import { CloseAppCommand } from './command/index.js';
import { writeToStdout } from './utils/index.js';

export const core = (commandName, userName) => {
  const nameToCommand = new Map();

  nameToCommand.set(CloseAppCommand.commandName, new CloseAppCommand(userName));
  const command = nameToCommand.get(commandName);

  if (!command) {
    return writeToStdout(`Unknown command: ${commandName}`);
  }

  command.execute();
};
