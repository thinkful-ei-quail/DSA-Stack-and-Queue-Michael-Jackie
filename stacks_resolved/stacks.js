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


//#2
function peek(stack) {
    if (stack.top === null) {
        return 'stack is empty';
    }
    return stack.top.data;
}
console.log('peek', peek(stack));

function isEmpty(stack) {
    if (stack.top === null) {
        return true;
    } else {

        if (stack.top !== null) {
            return false;
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

//#3
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
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
console.log(isPalindrome('dad'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('1001'));
console.log(isPalindrome('Tauhida'));

//#4
function parenthesesCheck(str) {
    const strStack = new Stack();
    const clsStack = new Stack();
    for (let i = 0; i < str.length; i++) {
        console.log('STR LENGTH', str.length, 'Iter', i + 1);
        if (str[i] === '(') {
            strStack.push(str[i]);
            console.log('1st IF',strStack);
        }
        if (peek(strStack) === '(' && str[i] === ')'){
                strStack.pop();
                
            console.log('2nd IF str', strStack);
            console.log('2nd IF cls', clsStack);
        }
        if (isEmpty(strStack) && str[i] === ')'){
            clsStack.push(str[i]);
            console.log('3rd IF', clsStack);
        }
    }
    console.log('STRING', isEmpty(strStack));
    console.log('CLOSED', isEmpty(clsStack));
    
    if (isEmpty(strStack) && isEmpty(clsStack)){
        return true;
    } else {
        return false;
    }
}
console.log('1st Pcheck should be false:', parenthesesCheck('()'));

//console.log('2nd Pcheck should be false:',parenthesesCheck('(('));