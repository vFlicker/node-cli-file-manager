import * as app from './app/index.js';
import * as files from './files/index.js';
import * as hash from './hash/index.js';
import * as navigate from './navigate/index.js';
import * as os from './os/index.js';
// import * as zip from './zip/index.js';

export const createCommands = (userName, commandData) => {
  const commands = new Map();

  // App
  commands.set(app.CloseCommand.commandName, new app.CloseCommand(userName));

  // Navigate
  commands.set(navigate.CdCommand.commandName, new navigate.CdCommand(commandData));
  commands.set(navigate.LsCommand.commandName, new navigate.LsCommand());
  commands.set(navigate.UpCommand.commandName, new navigate.UpCommand());

  // Files
  commands.set(files.AddCommand.commandName, new files.AddCommand(commandData));
  commands.set(files.CatCommand.commandName, new files.CatCommand(commandData));
  commands.set(files.CpCommand.commandName, new files.CpCommand(commandData));
  commands.set(files.MvCommand.commandName, new files.MvCommand(commandData));
  commands.set(files.RmCommand.commandName, new files.RmCommand(commandData));
  commands.set(files.RnCommand.commandName, new files.RnCommand(commandData));

  // OS
  commands.set(os.OsCommand.commandName, new os.OsCommand(commandData));

  // Hash
  commands.set(hash.HashCommand.commandName, new hash.HashCommand(commandData));

  return commands;
};
