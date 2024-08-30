const versionChecking = require('./version.js')
versionChecking()

function polskaNotation(str) {
  const arr = str.split(' ').map(el => el.match(/\d/) ? +el : el);
  const stack = [];
  const operation = (num1, num2, operator) => {
    switch (operator) {
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2
    }
  }
  const result = arr.reduce((acc, el, i) => {
    if (typeof el === 'number') {
      stack.push(el);
      console.log(stack, i);
    } else {
      switch (el) {
        case '*':
        case '/':
        case '+':
        case '-':
          const num2 = stack.pop();
          const num1 = stack.pop();
          acc = operation(num1, num2, el);
          stack.push(acc);
          break;
      }
    }
    return acc;
  }, 0);
  return result
}
module.exports = polskaNotation;