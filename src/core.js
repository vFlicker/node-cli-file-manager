import { CloseAppCommand } from './command/index.js';
import { stdoutText, writeToStdout } from './utils/index.js';

export const core = (commandName, userName) => {
  const nameToCommand = new Map();
  nameToCommand.set(CloseAppCommand.commandName, new CloseAppCommand(userName));
  const command = nameToCommand.get(commandName);

  if (!command) {
    writeToStdout(`Unknown command: ${commandName}`);
    return writeToStdout(
      stdoutText.sayCurrentlyDirectory('path_to_working_directory'),
    );
  }

  command.execute();
  writeToStdout(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));
};
