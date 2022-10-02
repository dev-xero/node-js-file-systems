const fs = require('fs');
const filename = 'target.txt';

fs.readFile(filename, (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data.toString());
});
