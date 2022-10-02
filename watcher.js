const fs = require('fs');
const target = 'target.txt';

fs.watch(target, () => {
	console.log(`File: ${target} just changed!`)
})

console.log(`Now watching ${target} for changes...`)