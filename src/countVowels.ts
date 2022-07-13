/**
 * function returns number of wovels in the given string
 * @param phrase -the input string
 * @returns the number of vowels
 */
function countVowels(phrase: string): number {
  let count = 0;
  for (let character of phrase) {
    if (isVowel(character)) {
      count++;
    }
  }
  return count;
}
function isVowel(character: string): boolean {
  const lowercase = character.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(lowercase);
}

export default countVowels;