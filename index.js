const spawn = require('child_process').spawn;
const cc = (process.env.CROSS_COMPILE || '') + 'c++filt';
const stream = require('stream');
const Readable = stream.Readable;

function pipe(data) {
	if (!data) {
		console.error('expecting some data');
		return null;
	}
	const child = spawn(cc);
	child.on('error', function() {
		console.error('error executing ' + cc);
	});
	if (typeof data === "string" || data instanceof Buffer) {
		child.stdin.end(data);
	} else if (data instanceof Readable) {
		data.pipe(child.stdin);
	}
	return child.stdout;
}

module.exports = pipe;
