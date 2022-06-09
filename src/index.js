import { argv } from 'process';

import { app } from './app.js';
import { setHomeDir } from './utils/index.js';

// INIT
setHomeDir();
app(argv);
