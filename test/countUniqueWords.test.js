const countUniqueWords = require("../countUniqueWords");

test("Validate that the text 'a b c d' has 4 unique words.", () => {
  expect(countUniqueWords("a b c d")).toBe(4);
});
test("Validate that the text 'b b a b' has 1 unique word.", () => {
  expect(countUniqueWords("b b a b")).toBe(1);
});
test("Validate that the text 'b! b. a B?' has 1 unique word.", () => {
  expect(countUniqueWords("b! b. a B?")).toBe(1);
});
test("Validate that the text 'a! b. a B?' has 0 unique words.", () => {
  expect(countUniqueWords("a! b. a B?")).toBe(0);
});
test("Validate that the song in the file has 60 unique words.", () => {
  const fs = require("fs");
  const song = fs
    .readFileSync("song.txt", "utf-8")
    .toString()
    .split("\r\n")
    .join(" ");

  expect(countUniqueWords(song)).toBe(60);
});
