'use strict';

const { LinkedList, zipList }= require('../index');

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

/// tests for zipList

describe('zipList', () => {
  // Provided test cases (Happy path)
  test('Should zip two lists with different lengths', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const result = zipList(list1, list2);

    expect(result.toString()).toContain('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL');
  });

  test('Should zip two lists with different lengths and one empty list', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();

    const result = zipList(list1, list2);

    expect(result.toString()).toContain('{ 1 } -> { 3 } -> NULL');
  });

  test('Should zip two lists with different lengths and one list ends early', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);

    const result = zipList(list1, list2);

    expect(result.toString()).toContain('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL');
  });

  // Additional test cases
  test('Should return an empty list if both input lists are empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = zipList(list1, list2);

    expect(result.toString()).toBe('NULL');
  });

  test('Should zip two lists with different lengths and return the remainder of the longer list', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    list2.append(8);

    const result = zipList(list1, list2);

    expect(result.toString()).toContain('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> { 8 } -> NULL');
  });

  test('Should zip two lists with different values', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append('a');
    list1.append(true);

    const list2 = new LinkedList();
    list2.append(2);
    list2.append('b');
    list2.append(false);

    const result = zipList(list1, list2);

    expect(result.toString()).toContain('{ 1 } -> { 2 } -> { a } -> { b } -> { true } -> { false } -> NULL');
  });
});



