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

const init = (userName, readline) => {
  setHomeDir();
  write(stdoutText.sayHello(userName));
  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
  readline.prompt();
};

const appInputHandler = (readline) => async (line) => {
  const [commandName, ...commandData] = line.split(' ');
  const commands = createCommands(commandData);
  const command = commands.get(commandName);

  if (!command) {
    write(stdoutText.sayInvalidInput(commandName));
  } else {
    await command.execute();
  }

  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));
  readline.prompt();
};

const appCloseHandler = (userName) => () => {
  write(stdoutText.sayGoodbye(userName));
  closeApp();
};

export const app = () => {
  const userName = getUserName();
  const readline = createInterface({ input, output });

  init(userName, readline);

  readline.on('line', appInputHandler(readline));
  readline.on('close', appCloseHandler(userName));
};
