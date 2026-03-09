/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const parenthesesMap = { ")": "(", "}": "{", "]": "[" };
  for (let i = 0; i < s.length; i++) {
    // if the stack is not empty and the last element in the stack is the corresponding opening parenthesis, then pop the stack
    if (
      stack.length > 0 &&
      parenthesesMap[stack[stack.length - 1]] === stack[i]
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  // if the stack is empty, then the parentheses are valid (true)
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
