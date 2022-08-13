import { closeApp, changeCommandName } from '../../utils/index.js';

export const close = () => closeApp();

changeCommandName(close, '.exit');
