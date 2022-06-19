import * as app from './app/index.js';
import * as files from './files/index.js';
import * as hash from './hash/index.js';
import * as navigate from './navigate/index.js';
import * as os from './os/index.js';
import * as zip from './zip/index.js';

export const createCommands = () => {
  const commandsMap = new Map();
  const commands = { ...app, ...files, ...hash, ...navigate, ...os, ...zip };

  for (const command of Object.values(commands)) {
    commandsMap.set(command.name, command);
  }

  return commandsMap;
};
