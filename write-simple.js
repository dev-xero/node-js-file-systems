const fs = require('fs');
const filename = 'written.txt';
const message = 'This message should be found in the written.txt file';

fs.writeFile(filename, message, (err) => {
  if (err) {
    throw err;
  }
  console.log('File has been saved.');
});
