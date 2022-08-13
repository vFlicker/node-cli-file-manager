import { arch, EOL, userInfo } from 'os';

import { HOME_DIR, write, WriteFlag, writeInTable } from '../../utils/index.js';
import { Flags } from './constants.js';
import { getCPUs } from './utils.js';

export const os = async (arg) => {
  switch (arg) {
    case Flags.EOL:
      write(JSON.stringify(EOL), WriteFlag.SUCCESS);
      break;
    case Flags.CPUS: {
      const [cpus, CPUsCount] = getCPUs();
      write(`Overall amount of CPUs: ${CPUsCount}`, WriteFlag.SUCCESS);
      writeInTable(cpus);
      break;
    }
    case Flags.HOMEDIR:
      write(`Home directory is ${HOME_DIR}`, WriteFlag.SUCCESS);
      break;
    case Flags.USERNAME:
      write(`User name is ${userInfo().username}`, WriteFlag.SUCCESS);
      break;
    case Flags.ARCHITECTURE:
      write(`This processor architecture is ${arch()}`, WriteFlag.SUCCESS);
      break;
    default:
      write('Operation failed', WriteFlag.ERROR);
      break;
  }
};
