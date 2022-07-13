import countVowels from "./countVowels";
import sum from "./countVowels";

test("counts vowels in a string", () => {
  expect(countVowels("Yara")).toBe(2);
  expect(countVowels("Hello! My name is Yara")).toBe(7);
  expect(countVowels("Babaaa")).toBe(4);
});
