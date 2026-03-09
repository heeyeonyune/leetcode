/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // sort the strings by length (shortest to longest)
  const sortedStrs = strs.sort((a, b) => a.length - b.length);

  // get the shortest str
  let shortestStr = sortedStrs[0];

  // start with the entire shortest string, check if each string matches with the shortest string
  // if not, remove the last character and check again
  while (!strs.every((str) => str.startsWith(shortestStr))) {
    if (shortestStr.length === 0) {
      return "";
    }
    shortestStr = shortestStr.slice(0, -1);
  }
  return shortestStr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(
  longestCommonPrefix([
    "monocle",
    "monologue",
    "monogamy",
    "monotony",
    "monorail",
  ]),
);
