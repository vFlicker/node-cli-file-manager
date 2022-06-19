import { arch, EOL, userInfo } from 'os';

import { HOME_DIR, write, writeInTable } from '../../utils/index.js';
import { Flags } from './constants.js';
import { getCPUs } from './utils.js';

export const os = async (arg) => {
  switch (arg) {
    case Flags.EOL:
      write(JSON.stringify(EOL), 'success');
      break;
    case Flags.CPUS: {
      const [cpus, CPUsCount] = getCPUs();
      write(`Overall amount of CPUs: ${CPUsCount}`, 'success');
      writeInTable(cpus);
      break;
    }
    case Flags.HOMEDIR:
      write(`Home directory is ${HOME_DIR}`, 'success');
      break;
    case Flags.USERNAME:
      write(`User name is ${userInfo().username}`, 'success');
      break;
    case Flags.ARCHITECTURE:
      write(`This processor architecture is ${arch()}`, 'success');
      break;
    default:
      write('Operation failed', 'error');
      break;
  }
};
