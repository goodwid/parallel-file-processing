#!/usr/bin/env node

const filecheck = require('./filecheck');
const displayResults = require('./displayResults');

const datafiles = [
"file1.txt",
"file2.txt",
"file3.txt",
"file4.txt",]
filecheck (datafiles, displayResults);
