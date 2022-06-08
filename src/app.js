import { core } from './core.js';
import {
  exit,
  getUserName,
  parseChunkToCommand,
  stdoutText,
  write,
} from './utils/index.js';

export const app = (argv) => {
  const userName = getUserName(argv);
  write(stdoutText.sayHello(userName));
  write(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));

  process.on('SIGINT', () => {
    write(stdoutText.sayGoodbye(userName));
    exit();
  });

  process.stdin.on('data', (chunk) => {
    const command = parseChunkToCommand(chunk);
    core(command, userName);
  });
};
