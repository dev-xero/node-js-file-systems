import { argv } from 'process';
import * as fs from 'fs';
const filename = argv[2];

if (!filename) {
  throw Error('A file must be specified to watch!');
}

fs.watch(filename, () => {
  console.log(`File: ${filename} just changed!`);
});

console.log(`Now watching ${filename} for changes...`);
