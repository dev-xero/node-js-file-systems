'use strict';
import * as fs from 'fs';
import { spawn } from 'child_process';
import { argv } from 'process';
const filename = argv[2];

if (!filename) {
  throw Error('A file must be specified to watch');
}

fs.watch(filename, () => {
  let ls = spawn('ls', ['-lh', filename]);
  ls.stdout.pipe(process.stdout);
});

console.log(`Now watching ${filename} for changes...`);
