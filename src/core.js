import { CloseAppCommand } from './command/index.js';
import { stdoutText, write } from './utils/index.js';

export const core = (commandName, userName) => {
  const nameToCommand = new Map();
  nameToCommand.set(CloseAppCommand.commandName, new CloseAppCommand(userName));
  const command = nameToCommand.get(commandName);

  if (!command) {
    write(`Unknown command: ${commandName}`);
    return write(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));
  }

  command.execute();
  write(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));
};
