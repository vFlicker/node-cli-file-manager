import * as commands from '../../commands/index.js';

export const createCommands = () => {
  const commandsMap = new Map();

  for (const command of Object.values(commands)) {
    commandsMap.set(command.name, command);
  }

  return commandsMap;
};
