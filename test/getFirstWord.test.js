const assert = require('assert');
const getFirstWord = require('./getFirstWord');

const wordlist = ['Integer','Curabitur','Vestibulum','Lorem'];
const datafiles = ['data/file1.txt','data/file2.txt','data/file3.txt','data/file4.txt'];

describe('getFirstWord', () => {

  it('returns an array containing the first word of each file', done => {
    getFirstWord(datafiles, (err, result) => {
      if (err) return done(err);
      assert.deepEqual(result, wordlist);
      done();
    });
  });
});
