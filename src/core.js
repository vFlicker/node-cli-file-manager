import { app, navigate } from './command/index.js';
import { stdoutText, write } from './utils/index.js';

export const core = (commandName, userName) => {
  const commands = new Map();
  commands.set(app.CloseCommand.commandName, new app.CloseCommand(userName));
  commands.set(navigate.UpCommand.commandName, new navigate.UpCommand());
  const command = commands.get(commandName);

  if (!command) {
    write(`Unknown command: ${commandName}`);
    write(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));
    return;
  }

  command.execute();
  write(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));
};
