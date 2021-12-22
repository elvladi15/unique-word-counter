function getCleanedWord(word) {
  const notAllowedSymbols = ["!", ".", "?", ",", "(", ")", "'"];
  let newWord = "";
  for (const character of word) {
    if (notAllowedSymbols.includes(character)) continue;
    newWord += character;
  }
  return newWord.toLowerCase();
}
module.exports = getCleanedWord;
