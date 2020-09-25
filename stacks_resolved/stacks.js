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
function main() {
  const starTrek = new Stack;
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  starTrek.pop();
  starTrek.pop();
  starTrek.pop();
  // starTrek.pop('McCoy')
  return starTrek;
}
console.log(main());

const stack = main();
console.log('STACK', stack);

function peek(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
  return stack.top.data;
}
console.log('peek', peek(stack));

function isEmpty(stack) {
  if (stack.top === null) {
    return 'Stack is empty';
  } else {

    if (stack.top !== null) {
      return 'items in stack';
    }
  }
}

console.log(isEmpty(stack));

function display(stack) {
  if (stack.top === null) {
    return 'stack is empty';
  }
  let node = stack.top;
  let string = '';
  while (node !== null) {
    string += node.data;
    if (node.next !== null) string += '->';
    node = node.next;
  }
  return string;
}

console.log('display', display(stack));