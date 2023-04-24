// tsc primitive.ts
// node primitive

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


// --- Record Type


let aRecordOldStyle: { [name: string]: string | number } = {
  name: 'Victoria',
  code: 3000,
};
console.log(typeof aRecordOldStyle);
console.log(aRecordOldStyle);

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


// --- interface, type


type Point = {
  x: number,
  y: number,
}
const pt: Point = {x: 100, y: 100};
console.log(pt)

interface IPoint {
  x: number,
  y: number,
  z: number,
}
const iPnt: IPoint = {x: 100, y: 100, z: 1000}
console.log(iPnt);

type ID = Point | IPoint;                                      // type alias + union type
const _id_ = {x: 100, y: 100}
console.log(typeof _id_);
console.log(_id_)


// --- Functional


const states = [
  { name: 'Victoria', code: 'VIC' },
  { name: 'New South Wales', code: 'NSW' },
  { name: 'Tasmania', code: 'TAS' },
];
const stateCodes = states.map(s => s.code);
console.log(stateCodes);

const vic = states.filter(s => s.code == 'VIC');
console.log(vic);

states.forEach(s => {
  console.log(s.name);
});
