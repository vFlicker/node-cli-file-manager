import { stdin, stdout } from 'process';
import { createInterface } from 'readline';

import { core } from './core.js';
import {
  closeApp,
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
    input: stdin,
    output: stdout,
  });

  readline.on('line', (line) => {
    core(line, userName);
  });

  readline.on('close', () => {
    write(stdoutText.sayGoodbye(userName));
    closeApp();
  });
};
