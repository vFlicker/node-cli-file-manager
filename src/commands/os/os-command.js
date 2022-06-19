import { arch, EOL, userInfo } from 'os';

import {
  HOME_DIR,
  stdoutText,
  write,
  writeInTable,
} from '../../utils/index.js';
import { Flags } from './constants.js';
import { getCPUs } from './utils.js';

export const os = async (arg) => {
  switch (arg) {
    case Flags.EOL:
      write(JSON.stringify(EOL));
      break;
    case Flags.CPUS: {
      const [cpus, CPUsCount] = getCPUs();
      write(`Overall amount of CPUs: ${CPUsCount}`);
      writeInTable(cpus);
      break;
    }
    case Flags.HOMEDIR:
      write(`Home directory is ${HOME_DIR}`);
      break;
    case Flags.USERNAME:
      write(`User name is ${userInfo().username}`);
      break;
    case Flags.ARCHITECTURE:
      write(`This processor architecture is ${arch()}`);
      break;
    default:
      write(stdoutText.sayFailed());
      break;
  }
};
