/* eslint-disable indent */
class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

//#1
function main() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  starTrek.pop();
  starTrek.pop();
  starTrek.pop();
  return starTrek;
}
console.log(main());

const stack = main();
console.log("STACK", stack);

//#2
function peek(stack) {
  if (stack.top === null) {
    return "stack is empty";
  }
  return stack.top.data;
}
console.log("peek", peek(stack));

function isEmpty(stack) {
  if (stack.top === null) {
    return "Stack is empty";
  } else {
    if (stack.top !== null) {
      return "items in stack";
    }
  }
}

console.log(isEmpty(stack));

function display(stack) {
  if (stack.top === null) {
    return "stack is empty";
  }
  let node = stack.top;
  let string = "";
  while (node !== null) {
    string += node.data;
    if (node.next !== null) string += "->";
    node = node.next;
  }
  return string;
}

console.log("display", display(stack));

//#3
function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let reverse = new Stack();
  for (let i = 0; i < str.length; i++) {
    reverse.push(str.charAt(i));
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] === reverse.pop()) continue;
    else return false;
  }
  return true;
}
console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));
console.log(isPalindrome("Tauhida"));

//#4
function parenthesesCheck(str) {
  const strStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      strStack.push(str[i]);
    }
    if(str[i] === ")" && strStack.top === null) {
      strStack.push(str[i]);
    }
    if (str[i] === ")" && strStack.top.data === "(") {
        strStack.pop();
    }
  }
  if (strStack.top === null) {
    return true;
  } else {
    return false;
  }
}
console.log("1st Pcheck should be true:", parenthesesCheck('()()()()()()()()'));
console.log("2nd Pcheck should be false:", parenthesesCheck("(("));
console.log("3rd Pcheck should be false:", parenthesesCheck("))"));
console.log("4th Pcheck should be false:", parenthesesCheck(")"));

// #4 Extension excercise
// function parenthesesCheckToo(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
//       strStack.push(str[i]);
//     }
//   }
// }
// console.log('Test 1, true: ', parenthesesCheckToo("()"))
//#5 Sort stack
//#6 Create a queue using Singly linked list
//#7 Create a queue class using Doubly linked List
//#8 Queue implementation using a stack
//#9 Square dance pairing
//#10 The Ophidian Bank


