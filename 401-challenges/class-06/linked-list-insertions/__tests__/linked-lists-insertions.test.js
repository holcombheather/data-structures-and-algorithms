'use strict';

const LinkedList = require('../index');

describe('Linked List', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  test('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();

    expect(list.head).toBeNull();
  });

  test('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insert(1);

    expect(list.head.value).toEqual(1);
    expect(list.head.next).toBeNull;
  });

  test('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insert(2);

    expect(list.head.value).toEqual(2);
    expect(list.head.next).toBeNull();

    // Can properly insert into the linked list
    list.insert(1);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next).toBeNull();
    list.append('a');
    expect(list.head.next.next.value).toEqual('a');

  });

  test('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(2);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next).toBeNull();
  });

  test('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(2);
    list.append(1);

    expect(list.includes(2)).toBe(true);
  });

  test('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.append(3);
    list.append(2);
    list.append(1);

    expect(list.includes(4)).toBe(false);
  });

  test('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');

    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> NULL');
  });

  test('Can successfully add a node to the end of the linked list', () => {
    linkedList.append(1);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next).toBeNull();
  });

  test('Can successfully add multiple nodes to the end of a linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  test('Can successfully insert a node before a node located in the middle of a linked list', () => {
    linkedList.append(1);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.insertBefore(3, 2);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next.value).toEqual(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  test('Can successfully insert a node before the first node of a linked list', () => {
    linkedList.append(2);
    linkedList.insertBefore(2, 1);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('Can successfully insert after a node in the middle of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(4);
    linkedList.insertAfter(2, 3);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next.value).toEqual(4);
    expect(linkedList.head.next.next.next.next).toBeNull();
  });

  test('Can successfully insert a node after the last node of the linked list', () => {
    linkedList.append(1);
    linkedList.append(2);
    linkedList.insertAfter(2, 3);

    expect(linkedList.head.value).toEqual(1);
    expect(linkedList.head.next.value).toEqual(2);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next).toBeNull();
  });

  ///

  // test('Where k is greater than the length of the linked list', () => {
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.append(3);
  //   linkedList.append(4);


  //   expect(linkedList.head.value).toEqual(1);
  //   expect(linkedList.head.next.value).toEqual(2);
  //   expect(linkedList.head.next.next.value).toEqual(3);
  //   expect(linkedList.head.next.next.next).toBeNull();
  // });

  // test('Where k and the length of the list are the same', () => {
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.insertAfter(2, 3);

  //   expect(linkedList.head.value).toEqual(1);
  //   expect(linkedList.head.next.value).toEqual(2);
  //   expect(linkedList.head.next.next.value).toEqual(3);
  //   expect(linkedList.head.next.next.next).toBeNull();
  // });

  // test('Where k is not a positive integer', () => {
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.insertAfter(2, 3);

  //   expect(linkedList.head.value).toEqual(1);
  //   expect(linkedList.head.next.value).toEqual(2);
  //   expect(linkedList.head.next.next.value).toEqual(3);
  //   expect(linkedList.head.next.next.next).toBeNull();
  // });

  // test('Where the linked list is of a size 1', () => {
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.insertAfter(2, 3);

  //   expect(linkedList.head.value).toEqual(1);
  //   expect(linkedList.head.next.value).toEqual(2);
  //   expect(linkedList.head.next.next.value).toEqual(3);
  //   expect(linkedList.head.next.next.next).toBeNull();
  // });

  // test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.insertAfter(2, 3);

  //   expect(linkedList.head.value).toEqual(1);
  //   expect(linkedList.head.next.value).toEqual(2);
  //   expect(linkedList.head.next.next.value).toEqual(3);
  //   expect(linkedList.head.next.next.next).toBeNull();
  // });

  ///

  test('Where k is greater than the length of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromTheEnd(10)).toEqual(null);
  });

  test('Where k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromTheEnd(3)).toEqual('a');
  });

  test('Where k is not a positive integer', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromTheEnd(-3)).toEqual(null);
  });

  test('Where the linked list is of a size 1', () => {
    const list = new LinkedList();
    list.append('a');
    expect(list.toString()).toEqual('{ a } -> NULL');
    expect(list.kthFromTheEnd(0)).toEqual('a');
  });

  test('"Happy Path" where k is not at the end, but somewhere in the middle of the linked list', () => {
    const list = new LinkedList();
    list.append('a');
    list.append('b');
    list.append('c');
    list.append('d');
    expect(list.toString()).toEqual('{ a } -> { b } -> { c } -> { d } -> NULL');
    expect(list.kthFromTheEnd(2)).toEqual('b');
  });

});
