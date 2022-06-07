import { EOL } from 'os';

export const writeToStdout = (text) => {
  process.stdout.write(text + EOL);
};
