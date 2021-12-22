const getCleanedWord = require("./getCleanedWord");

function countUniqueWords(text) {
  const words = text.split(" ");

  let uniqueWords = [];
  const repeatedWords = [];

  for (const word of words) {
    const cleanedWord = getCleanedWord(word);
    if (uniqueWords.includes(cleanedWord)) {
      uniqueWords = uniqueWords.filter((element) => element !== cleanedWord);
      repeatedWords.push(cleanedWord);
    } else if (repeatedWords.includes(cleanedWord)) continue;
    else {
      uniqueWords.push(cleanedWord);
    }
  }
  return uniqueWords.length;
}
module.exports = countUniqueWords;
