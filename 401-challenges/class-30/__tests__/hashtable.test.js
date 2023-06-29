'use strict';

const { Hashtable } = require('../index');

describe('Hashtable', () => {
  it('Can successfully set a key-value pair in the hashtable', () => {
    const hashtable = new Hashtable();
    hashtable.set('testKey', 'testValue');
    expect(hashtable.get('testKey')).toBe('testValue');
  });

  it('Can successfully get the value associated with a given key', () => {
    const hashtable = new Hashtable();
    hashtable.set('testKey', 'testValue');
    expect(hashtable.get('testKey')).toBe('testValue');
  });

  it('Can successfully check if a key exists in the hashtable', () => {
    const hashtable = new Hashtable();
    hashtable.set('testKey', 'testValue');
    expect(hashtable.has('testKey')).toBe(true);
    expect(hashtable.has('nonexistentKey')).toBe(false);
  });

  it('Can successfully return a list of all unique keys in the hashtable', () => {
    const hashtable = new Hashtable();
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    hashtable.set('key3', 'value3');
    const keys = hashtable.keys();
    expect(keys).toContain('key1');
    expect(keys).toContain('key2');
    expect(keys).toContain('key3');
  });

  it('Can successfully handle a collision within the hashtable', () => {
    const hashtable = new Hashtable(1); // size of 1 will ensure a collision
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
  });

  it('Can successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    const hashtable = new Hashtable(1); // size of 1 will ensure a collision
    hashtable.set('key1', 'value1');
    hashtable.set('key2', 'value2');
    expect(hashtable.get('key1')).toBe('value1');
    expect(hashtable.get('key2')).toBe('value2');
  });

  it('Can successfully hash a key to an in-range value', () => {
    const hashtable = new Hashtable(50); // size of 50
    const hashValue = hashtable.hash('testKey');
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(50);
  });
});
