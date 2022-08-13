import { stdin as input, stdout as output } from 'process';
import { createInterface } from 'readline';

import { createCommands } from './utils/index.js';
import {
  closeApp,
  getWorkingDirectory,
  getUserName,
  parseStringWithSpaces,
  setHomeDir,
  write,
  WriteFlag,
} from './utils/index.js';

const commands = createCommands();

const writeCurrentlyDirectory = () => {
  write(`You are currently in ${getWorkingDirectory()}`);
};

const init = (readline) => {
  setHomeDir();
  write(`Welcome to the File Manager, ${getUserName()}!`, WriteFlag.IMPORTANT);
  writeCurrentlyDirectory();
  readline.prompt();
};

const appInputHandler = (readline) => async (line) => {
  const [commandName, ...commandData] = line.split(' ');
  const parsedCommandData = parseStringWithSpaces(commandData);
  const command = commands.get(commandName);

  if (!command) {
    write(`Invalid input: ${commandName}`, WriteFlag.ERROR);
  } else {
    // TODO: create function to handle command
    try {
      await command(...parsedCommandData);
    } catch (err) {
      write('Operation failed', WriteFlag.ERROR);
    }
  }

  writeCurrentlyDirectory();
  readline.prompt();
};

export const app = () => {
  const readline = createInterface({ input, output });

  init(readline);

  readline.on('line', appInputHandler(readline));
  readline.on('close', closeApp);
};
