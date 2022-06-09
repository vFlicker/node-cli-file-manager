import { stdin as input, stdout as output } from 'process';
import { createInterface } from 'readline';
import { createCommands } from './commands/index.js';

import {
  closeApp,
  getWorkingDirectory,
  getUserName,
  setHomeDir,
  stdoutText,
  write,
} from './utils/index.js';

const init = (userName) => {
  setHomeDir();
  write(stdoutText.sayHello(userName));
  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
};

const handleAppInput = (userName) => async (line) => {
  const [commandName, ...commandData] = line.split(' ');
  const commands = createCommands(userName, commandData);
  const command = commands.get(commandName);

  if (!command) {
    write(stdoutText.sayInvalidInput(commandName));
  } else {
    await command.execute();
  }

  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
};

const handleAppClose = (userName) => () => {
  write(stdoutText.sayGoodbye(userName));
  closeApp();
};

export const app = (argv) => {
  const userName = getUserName(argv);
  const readline = createInterface({ input, output });

  init(userName);

  readline.on('line', handleAppInput(userName));
  readline.on('close', handleAppClose(userName));
};
