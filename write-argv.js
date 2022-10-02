const fs = require('fs');
const filename = process.argv[2];
const message = 'This text will appear in any file you specify.';

if (!filename) {
  throw Error('A file to write to must be specified!');
}

fs.writeFile(filename, message, (err) => {
  if (err) {
    throw err;
  }
  console.log(`File has been saved to ${filename}`);
});
