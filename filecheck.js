const fs = require('fs');
const path = require('path');
const displayResults = require('./displayResults');

const datafiles = [
"data/file1.txt",
"data/file2.txt",
"data/file3.txt",
"data/file4.txt",]

// accepts a directory to scan and a callback
function filecheck(files, callback) {
  const results = [];
  var count = files.length;
  files.forEach( file => {
    fs.readFile(file, 'utf-8', (err, filetext) => {
      if (err) return callback(err);
      results.push(filetext.split(' ')[0]);
      if (!--count) {
        callback(null, results);
      }
    });
  });

}

filecheck(datafiles, displayResults)

module.exports = filecheck;
