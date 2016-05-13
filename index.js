#!/usr/bin/env node

const getFirstWord = require('./getFirstWord');
const fs = require('fs');
const path = require('path');

const directory = process.argv[2];

fs.readdir (directory, (err, files) => {
  var filelist = files.map(file => {
    return path.join(directory, file);
  });
  getFirstWord (filelist, displayResults);
});

function displayResults(err, data, files) {
  data.forEach( (word, index) => {
    console.log(`${files[index]}\t${word}`);
  });
}
