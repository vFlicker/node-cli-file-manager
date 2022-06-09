import { app, files, navigate } from './command/index.js';
import { getWorkingDirectory, stdoutText, write } from './utils/index.js';

export const core = async (line, userName) => {
  const [commandName, ...commandData] = line.split(' ');

  const commands = new Map();
  // App
  commands.set(app.CloseCommand.commandName, new app.CloseCommand(userName));

  // Navigate
  commands.set(navigate.CdCommand.commandName, new navigate.CdCommand(commandData));
  commands.set(navigate.LsCommand.commandName, new navigate.LsCommand());
  commands.set(navigate.UpCommand.commandName, new navigate.UpCommand());

  // File
  commands.set(files.CatCommand.commandName, new files.CatCommand(commandData));

  const command = commands.get(commandName);

  if (!command) {
    write(stdoutText.sayInvalidInput(commandName));
    write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
    return;
  }

  await command.execute();
  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
};
