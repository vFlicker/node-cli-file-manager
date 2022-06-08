import { createInterface } from 'readline';

import { core } from './core.js';
import {
  exit,
  getWorkingDirectory,
  getUserName,
  stdoutText,
  write,
} from './utils/index.js';

export const app = (argv) => {
  const userName = getUserName(argv);
  write(stdoutText.sayHello(userName));
  write(stdoutText.sayCurrentlyDirectory(getWorkingDirectory()));

  const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.on('line', (command) => {
    core(command, userName);
  });

  readline.on('close', () => {
    write(stdoutText.sayGoodbye(userName));
    exit();
  });
};
