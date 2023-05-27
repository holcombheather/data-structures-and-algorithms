'use strict';

const { Stack } = require('./index');

describe('Stack', () => {
  it('Can successfully push onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    expect(stack.top.value).toEqual(1);
    expect(stack.top.next).toBeNull();
  });
  
  it('Can successfully push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.top.value).toEqual(3);
    expect(stack.top.next.value).toEqual(2);
    expect(stack.top.next.next.value).toEqual(1);
    expect(stack.top.next.next.next).toBeNull();
  });

  test('Can successfully pop off the stack', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const poppedValue = stack.pop();
    expect(poppedValue).toEqual(3);
    expect(stack.peek()).toEqual(2);
  });

  test('Can successfully empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  test('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).toEqual(true);
  });

  test('Calling pop on empty stack raises exception', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });
});
