const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
  throw Error('A file to read must be specified!');
}

fs.readFile(filename, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
