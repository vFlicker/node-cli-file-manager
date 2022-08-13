import { exit } from 'process';

import { getUserName, write } from '.';

export const closeApp = () => {
  write(`Thank you for using File Manager, ${getUserName()}!`);
  exit();
};
