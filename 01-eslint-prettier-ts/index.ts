/**
 * Person class
 */
class Person {
  private readonly _firstName: string;
  private readonly _lastName: string;

  /**
   *
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  /**
   * get full name
   * @return {string} getFullName
   */
  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  /**
   * greet with firstName
   * @return {string} greet
   */
  greet() {
    return 'Hello ' + this._firstName;
  }
}

const p = new Person('Victor', 'Lin');
console.log(p.greet());
console.log(p.getFullName());
console.log(p);

// TSC compile will be failed.
// index.ts:35:3 - error TS2341: Property '_firstName' is private and
// only accessible within class 'Person'.
//
// But uncomment the following in index.js to observe that it can be mutated,
// i.e. "information hiding" is not possible at runtime.
// So best practice only in JavaScript.
// That's mean, don't freaking mutate variable start with underscore!! :/
// p._firstName = 'Badly_Mutated Victor';
// console.log(p);

// And deleting object properties is also possible!!
// delete p['_firstName'];
// delete p._lastName;
// console.dir(p);
