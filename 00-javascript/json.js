// How To Work with JSON in JavaScript
// https://www.digitalocean.com/community/tutorials/how-to-work-with-json-in-javascript

// How To Use Object Methods in JavaScript
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript


var var1 = { "id" : 1, "name" : "BMW", "engine" : "R3" };
console.log(typeof var1);
console.log(var1.name);

let var2 = '{ "id" : 1, "name" : "BMW", "engine" : "R3" }';
console.log(typeof var2);
console.log(JSON.parse(var2).name);

let var3 = '{\n' +
    '  "meta": {\n' +
    '    "link": "http://example.com",\n' +
    '    "next": "home",\n' +
    '    "page": 1\n' +
    '  },\n' +
    '  "results": [\n' +
    '    {\n' +
    '      "id": 1,\n' +
    '      "name": "BWM",\n' +
    '      "created": "1981-12-1"\n' +
    '    },\n' +
    '    {\n' +
    '      "id": 2,\n' +
    '      "name": "MAZDA",\n' +
    '      "created": "1979-12-1"\n' +
    '    },\n' +
    '    {\n' +
    '      "id": 3,\n' +
    '      "name": "JEEP",\n' +
    '      "created": "1977-12-1"\n' +
    '    }\n' +
    '  ]\n' +
    '}';
console.log(var3);

const data = JSON.parse(var3);
console.log(data.meta);

const { meta, results } = data;
console.log(meta.link);

results.map(car => {
    console.log(car.id, car.name, car.created);

    let { id, name, created } = car;
    console.log(id, name, created);
});

results.forEach((r, idx) => console.log(idx, r.id, r.name, r.created));

console.log(Object.keys(results));
console.log(Object.values(results));

const column_headers = Object.keys(results[0]);
console.log(column_headers.map(h => h.toUpperCase()));

const rows = results.map(r => Object.values(r));
console.log(rows);

console.log();

// kv_data structure is very Map alike key value pair but an object in JavaScript! This typical JSON structure for representing a single object.
const kv_data = { key1: 'value1', key2: 'value2' };

try {
    kv_data.forEach((k,v) => console.log(k, v)); // Nop! throws TypeError: kv_data.forEach is not a function. kv_data is not a Map or array, it is an object!
} catch (e) {
    // pass
}

try {
    for (let [k, v] of kv_data) { // Nop! throws TypeError: kv_data is not iterable
        console.log("Key: " + k);
        console.log("Value: " + v);
    }
} catch (e) {
    // pass
}

// basically, it needs to iterates over object's keys and get value by key

for (let k in kv_data) {
    console.log(k, kv_data[k]);
}

Object.keys(kv_data).forEach(function(k) { // using Object.keys()
    let v = kv_data[k];
    console.log(k, v);
});

for (let [k, v] of Object.entries(kv_data)) { // using Object.entries()
    console.log(`${k}: ${v}`);
}

// https://stackoverflow.com/questions/33946567/iterate-over-values-of-object
