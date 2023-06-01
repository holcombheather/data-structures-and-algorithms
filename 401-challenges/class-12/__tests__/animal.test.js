const { Animal, AnimalShelter } = require('../index');

describe('Animal Shelter', () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  describe('enqueue', () => {
    test('should enqueue a dog to the shelter', () => {
      const dog = new Animal('dog', 'Buddy');
      shelter.enqueue(dog);

      console.log(shelter.dequeue('dog')); // Expected Output: Animal { species: 'dog', name: 'Buddy' }
    });

    test('should enqueue a cat to the shelter', () => {
      const cat = new Animal('cat', 'Whiskers');
      shelter.enqueue(cat);

      console.log(shelter.dequeue('cat')); // Expected Output: Animal { species: 'cat', name: 'Whiskers' }
    });

    test('should not enqueue an invalid animal species', () => {
      const rabbit = new Animal('rabbit', 'Fluffy');
      shelter.enqueue(rabbit);

      console.log(shelter.dequeue('rabbit')); // Expected Output: null
    });
  });

  describe('dequeue', () => {
    beforeEach(() => {
      shelter.enqueue(new Animal('dog', 'Buddy'));
      shelter.enqueue(new Animal('cat', 'Whiskers'));
      shelter.enqueue(new Animal('dog', 'Max'));
    });

    test('should dequeue the next available dog', () => {
      console.log(shelter.dequeue('dog')); // Expected Output: Animal { species: 'dog', name: 'Buddy' }
    });

    test('should dequeue the next available cat', () => {
      console.log(shelter.dequeue('cat')); // Expected Output: Animal { species: 'cat', name: 'Whiskers' }
    });

    test('should return null for an empty queue', () => {
      shelter.dequeue('dog');
      shelter.dequeue('cat');
      shelter.dequeue('dog');

      console.log(shelter.dequeue('dog')); // Expected Output: null
    });

    test('should return null for an invalid preference', () => {
      console.log(shelter.dequeue('rabbit')); // Expected Output: null
    });
  });
});
