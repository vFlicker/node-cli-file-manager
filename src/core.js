import { app, navigate } from './command/index.js';
import { getWorkingDirectory, stdoutText, write } from './utils/index.js';

export const core = (line, userName) => {
  const [commandName, ...commandData] = line.split(' ');

  const commands = new Map();
  commands.set(app.CloseCommand.commandName, new app.CloseCommand(userName));
  commands.set(
    navigate.CdCommand.commandName,
    new navigate.CdCommand(commandData),
  );
  commands.set(navigate.LsCommand.commandName, new navigate.LsCommand());
  commands.set(navigate.UpCommand.commandName, new navigate.UpCommand());
  const command = commands.get(commandName);

  if (!command) {
    write(stdoutText.sayInvalidInput(commandName));
    write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
    return;
  }

  command.execute();
  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
};
