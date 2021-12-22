const getCleanedWord = require("../getCleanedWord");

test("Validate that the word 'A' is the same as 'a'", () => {
  expect(getCleanedWord("A")).toBe("a");
});
test("Validate that the word 'a.' is the same as 'a'", () => {
  expect(getCleanedWord("a.")).toBe("a");
});
test("Validate that the word 'a!' is the same as 'a'", () => {
  expect(getCleanedWord("a!")).toBe("a");
});
test("Validate that the word 'a?' is the same as 'a'", () => {
  expect(getCleanedWord("a?")).toBe("a");
});
test("Validate that the word 'A?' is the same as 'a'", () => {
  expect(getCleanedWord("A?")).toBe("a");
});
test("Validate that the word 'A!' is the same as 'a'", () => {
  expect(getCleanedWord("A!")).toBe("a");
});
test("Validate that the word 'A.' is the same as 'a'", () => {
  expect(getCleanedWord("A.")).toBe("a");
});
test("Validate that the word 'A,' is the same as 'a'", () => {
  expect(getCleanedWord("A,")).toBe("a");
});
test("Validate that the word '(A' is the same as 'a'", () => {
  expect(getCleanedWord("(A")).toBe("a");
});
test("Validate that the word 'A)' is the same as 'a'", () => {
  expect(getCleanedWord("A)")).toBe("a");
});
test("Validate that the word '(A)' is the same as 'a'", () => {
  expect(getCleanedWord("(A)")).toBe("a");
});
test("Validate that the word 'A'' is the same as 'a'", () => {
  expect(getCleanedWord("A'")).toBe("a");
});
