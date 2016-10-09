var zlib = require('zlib');
var fs = require('fs');
var streamOptions = {
	encoding: 'utf8',
	highWaterMark: 16 * 1024
};
var readable = fs.createReadStream(`${__dirname}/text.txt`, streamOptions);
var writable = fs.createWriteStream(`${__dirname}/text2.txt`);
var gzip = zlib.createGzip();
var unzip = zlib.createUnzip();
var compressed = fs.createWriteStream(`${__dirname}/text.txt.gz`);
readable.pipe(writable);
readable
	.pipe(gzip)
	.pipe(compressed)
	.pipe(unzip)
	.pipe(writable);