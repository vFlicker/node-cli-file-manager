import { arch, cpus as getCPUs, EOL, userInfo } from 'os';

import {
  HOME_DIR,
  stdoutText,
  write,
  writeInTable,
} from '../../utils/index.js';
import { AbstractCommand } from '../abstract-command.js';

export class OsCommand extends AbstractCommand {
  #arg = '';

  constructor([arg]) {
    super();

    this.#arg = arg;
  }

  static get commandName() {
    return 'os';
  }

  async execute() {
    switch (this.#arg) {
      case '--EOL':
        write(JSON.stringify(EOL));
        break;
      case '--cpus': {
        const [cpus, CPUsCount] = this.#getCPUs();
        write(`Overall amount of CPUs: ${CPUsCount}`);
        writeInTable(cpus);
        break;
      }
      case '--homedir':
        write(`Home directory is ${HOME_DIR}`);
        break;
      case '--username':
        write(`User name is ${userInfo().username}`);
        break;
      case '--architecture':
        write(`This processor architecture is ${arch()}`);
        break;
      default:
        write(stdoutText.sayFailed());
        break;
    }
  }

  #getCPUs() {
    const cpus = getCPUs();
    const formattedCPUsData = {};
    const CPUsCount = cpus.length;

    for (let index = 0; index < CPUsCount; index++) {
      const { model, speed } = cpus[index];
      formattedCPUsData[index + 1] = {
        model: model.split(' CPU')[0],
        speed: `${this.#getCpuSpeed(speed)} GHz`,
      };
    }

    return [formattedCPUsData, CPUsCount];
  }

  #getCpuSpeed(speed) {
    console.log(speed);
    const isSpeedInHz = speed >= 100;
    if (isSpeedInHz) return speed / 1000;
    return speed / 10;
  }
}
