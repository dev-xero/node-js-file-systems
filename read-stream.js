const fs = require('fs');
const stream = fs.createReadStream(process.argv[2]);

stream.on('data', (chunk) => {
  process.stdout.write(chunk); // STDOUT IS LIKE THE CONSOLE/TERMINAL
});

stream.on('error', (err) => {
  process.stdout.write(`ERROR: ${err} \n`);
});
