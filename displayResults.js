function displayResults(err, data, files) {
  data.forEach( (word, index) => {
    console.log(`${files[index]}\t${word}`);
  });
}


module.exports = displayResults;
