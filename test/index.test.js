const assert = require('assert');
// const fs = require('fs');
const path = require('path');
const filecheck = require('../filecheck');

const filelist = ['file1.txt','file2.txt','file3.txt','file4.txt'];

describe('filecheck', () => {

  it('returns an array containing the first byte of each file', done => {
    const dir = path.join(__dirname, 'data');
    filecheck(dir, (err, result) => {
      if (err) return done(err);
      assert.ok(result.indexOf('file1.txt') !== -1, 'file1.txt not found');
      assert.ok(result.indexOf('file2.txt') !== -1, 'file2.txt not found');
      assert.ok(result.indexOf('file3.txt') !== -1, 'file3.txt not found');
      assert.ok(result.indexOf('file4.txt') !== -1, 'file4.txt not found');
      done();
    });

  });
});
