const assert = require('assert');
// const fs = require('fs');
const path = require('path');
const filecheck = require('../filecheck');

const wordlist = ['Integer','Curabitur','Vestibulum','Lorem'];

describe('filecheck', () => {

  it('returns an array containing the first word of each file', done => {
    const dir = path.join(__dirname, '../data');
    filecheck(dir, (err, result) => {
      if (err) return done(err);
      assert.equal(result, wordlist);
      done();
    });

  });
});
