import { stdout } from 'process';
import { EOL } from 'os';

export const write = (text) => {
  stdout.write(text + EOL);
};
