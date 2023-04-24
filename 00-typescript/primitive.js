// tsc primitive.ts
// node primitive
var myStr = "My String";
console.log(myStr);
var aArray = [];
console.log(typeof aArray);
console.log(aArray);
var bArray = ['a', 'b'];
console.log(typeof bArray);
console.log(bArray);
var aObj = { 'myKey': 'myValue' };
console.log(typeof aObj);
console.log(aObj);
var fruits = ['Apple', 'Orange', 'Banana'];
console.log(fruits);
var fruitsGenerics = ['Apple', 'Orange', 'Banana'];
console.log(fruitsGenerics);
// --- Record Type
var aRecordOldStyle = {
    name: 'Victoria',
    code: 3000,
};
console.log(typeof aRecordOldStyle);
console.log(aRecordOldStyle);
var aRecord = {
    name: 'NSW',
    code: 2000,
};
console.log(typeof aRecord);
console.log(aRecord);
var aRecordAny = {
    this: 'is',
    also: 'ok',
    right: ['yes', 'no'],
    no: 1,
};
console.log(typeof aRecordAny);
console.log(aRecordAny);
console.log(aRecordAny.no);
var myRecord = {};
myRecord['workflow'] = ['test', 'demo'];
console.log(myRecord);
var pt = { x: 100, y: 100 };
console.log(pt);
var iPnt = { x: 100, y: 100, z: 1000 };
console.log(iPnt);
var _id_ = { x: 100, y: 100 };
console.log(typeof _id_);
console.log(_id_);
// --- Functional
var states = [
    { name: 'Victoria', code: 'VIC' },
    { name: 'New South Wales', code: 'NSW' },
    { name: 'Tasmania', code: 'TAS' },
];
var stateCodes = states.map(function (s) { return s.code; });
console.log(stateCodes);
var vic = states.filter(function (s) { return s.code == 'VIC'; });
console.log(vic);
states.forEach(function (s) {
    console.log(s.name);
});
