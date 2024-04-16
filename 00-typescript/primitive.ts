// tsc primitive.ts
// node primitive

import {printDash} from "./utils";

let myStr: string = "My String";
console.log(myStr);

const aArray: any = [];
console.log(typeof aArray);
console.log(aArray);

const bArray = ['a', 'b'];
console.log(typeof bArray);
console.log(bArray);

const aObj = {'myKey': 'myValue'};
console.log(typeof aObj);
console.log(aObj)

let fruits: string[] = ['Apple', 'Orange', 'Banana'];
console.log(fruits);

let fruitsGenerics: Array<string> = ['Apple', 'Orange', 'Banana'];
console.log(fruitsGenerics);

let jsonAsAnObject = {
  'id': 123456,
  'name': 'John Doe'
}
console.log(typeof jsonAsAnObject);
console.log(jsonAsAnObject);

let objectSpreadOperator = {
  ...jsonAsAnObject,
  'name': '__OVERRIDE NAME__',
  'description': 'object spread operator',
}
console.log(typeof objectSpreadOperator);
console.log(objectSpreadOperator);

printDash();


// --- Type-ing


// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type Fruit = "Apple" | "Orange" | "Banana";  // Type aliasing using `type` keyword

const myBanana: string = "Banana";

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions
let myFruit: Fruit = myBanana as Fruit;  // Type assertion (or Casting)
console.log(myFruit);
console.log(typeof myFruit);

printDash();

// --- Interface and Type-ing


// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
type Point = {
  x: number,
  y: number,
}
const pt: Point = {x: 100, y: 100};
console.log(pt)

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
interface IPoint {
  x: number,
  y: number,
  z: number,
}

const iPnt: IPoint = {x: 100, y: 100, z: 1000}
console.log(iPnt);

type ID = Point | IPoint;

const _id_: ID = {x: 100, y: 100}
console.log(typeof _id_);
console.log(_id_)

printDash();


// --- Record Type
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type


let aRecordOldStyle: { [name: string]: string | number } = {
  name: 'Victoria',
  code: 3000,
};
console.log(typeof aRecordOldStyle);
console.log(aRecordOldStyle);

// --- Union Type
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
let aRecord: Record<string, string | number> = {               // Using pipe char `string | number` <<< Union Type
  name: 'NSW',
  code: 2000,
};
console.log(typeof aRecord);
console.log(aRecord);

let aRecordAny: Record<any, any> = {
  this: 'is',
  also: 'ok',
  right: ['yes', 'no'],
  no: 1,
};
console.log(typeof aRecordAny);
console.log(aRecordAny);
console.log(aRecordAny.no);

let myRecord: Record<string, string[]> = {};
myRecord['workflow'] = ['test', 'demo'];
console.log(myRecord)

printDash();


// --- Intersection Type
// https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types
// https://stackoverflow.com/questions/38317625/what-does-the-ampersand-mean-in-a-typescript-type-definition

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
// draw({ color: "red", raidus: 42 });

printDash();

// --- Functional


const states = [
  {name: 'Victoria', code: 'VIC'},
  {name: 'New South Wales', code: 'NSW'},
  {name: 'Tasmania', code: 'TAS'},
];
const stateCodes = states.map(s => s.code);
console.log(stateCodes);

const vic = states.filter(s => s.code == 'VIC');
console.log(vic);

states.forEach(s => {
  console.log(s.name);
});


// --- Looping

printDash();
for (let idx in states) {
  console.log(idx, states[idx]);
}

printDash();
for (const [k, v] of Object.entries(states)) {  // required compiler target => ES2017
  console.log(k, v);
}
