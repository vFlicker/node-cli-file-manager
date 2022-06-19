import { argv } from 'process';

export const getUserName = () => {
  const args = argv.slice(2);
  const userNameArg = args.find((arg) => arg.startsWith('--username='));
  return userNameArg ? userNameArg.split('=')[1] : 'Anonymous';
};
