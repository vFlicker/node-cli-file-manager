import { EOL } from 'os';

export const write = (text) => {
  process.stdout.write(text + EOL);
};
