import { core } from './core.js';
import {
  exit,
  getUserName,
  parseChunkToCommand,
  stdoutText,
  writeToStdout,
} from './utils/index.js';

export const app = (argv) => {
  const userName = getUserName(argv);
  writeToStdout(stdoutText.sayHello(userName));
  writeToStdout(stdoutText.sayCurrentlyDirectory('path_to_working_directory'));

  process.on('SIGINT', () => {
    writeToStdout(stdoutText.sayGoodbye(userName));
    exit();
  });

  process.stdin.on('data', (chunk) => {
    const command = parseChunkToCommand(chunk);
    core(command, userName);
  });
};
