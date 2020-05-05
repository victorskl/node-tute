// Understanding Arrays in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-arrays-in-javascript

// Initialize array of shark species with array literal
let sharks = [
    "Hammerhead",
    "Great White",
    "Tiger",
];

// Initialize array of shark species with array constructor
let sharks2 = new Array("Hammerhead", "Great White", "Tiger",);
console.log(sharks2);

// Initialize array of mixed datatypes
let mixedData = [
    "String",
    null,
    7,
    [
        "another",
        "array",
    ],
];
console.log(mixedData);
console.log(mixedData.length);
console.log(mixedData.indexOf(7));
console.log(mixedData.indexOf('does not exist'));

mixedData[5] = "Append new element";
console.log(mixedData[4]); // undefined
console.log(mixedData[5]);

mixedData.push("Marvel");
console.log(mixedData[6]);

mixedData.unshift("At the Head now");
console.log(mixedData[0]);

let newMix = mixedData.slice(5, 1);
console.log(newMix);
console.log(mixedData.length);

mixedData.splice(5, 1);
console.log(mixedData.length);

// Remove the last item from the array
mixedData.pop();
console.log(mixedData.length);

// Remove the first item from the array
mixedData.shift();
console.log(mixedData.length);

// Replace element value using splice method
mixedData.splice(3, 1, "sea lion");
console.log(mixedData);

// Loop through the length of the array
for (let i = 0; i < mixedData.length; i++) {
    console.log(i, mixedData[i]);
}

let mammals = [
    "dolphin",
    "whale",
    "manatee",
];

// Loop through each mammal
for (let mammal of mammals) {
    console.log(mammal);
}

console.log();

//---

// Simplify your JavaScript – Use .map(), .reduce(), and .filter()
// https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

const officers = [
    {id: 20, name: 'Captain Piett'},
    {id: 24, name: 'General Veers'},
    {id: 56, name: 'Admiral Ozzel'},
    {id: 88, name: 'Commander Jerjerrod'}
];

const officersIds = [];
officers.forEach(function (officer) {
    officersIds.push(officer.id);
});
console.log(officersIds);

const officersIds2 = officers.map(function (officer) {
    return officer.id
});
console.log(officersIds2);

const officersIds3 = officers.map(officer => officer.id);  // much like Java8 collection!
console.log(officersIds3);

const pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
        faction: "Rebels",
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
        faction: "Empire",
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
        faction: "Empire",
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
        faction: "Rebels",
    }
];
const totalYears = pilots.reduce(function (accumulator, pilot) {
    return accumulator + pilot.years;
}, 0);
console.log(totalYears); // 82

const totalYears2 = pilots.reduce((acc, pilot) => acc + pilot.years, 0);
console.log(totalYears2);

const mostExpPilot = pilots.reduce(function (oldest, pilot) {
    return (oldest.years || 0) > pilot.years ? oldest : pilot;
}, {});
console.log(mostExpPilot);

// kids these day, huh!! like sugar, lots!! old is gold :XDD
let oldest = 0;
let oldestPilot;
for (let i=0; i < pilots.length; i++) {
    if (pilots[i].years > oldest) {
        oldest = pilots[i].years;
        oldestPilot = pilots[i];
    }
}
console.log(oldestPilot);

const rebels = pilots.filter(function (pilot) {
    return pilot.faction === "Rebels";
});
const empire = pilots.filter(function (pilot) {
    return pilot.faction === "Empire";
});
console.log(rebels, empire);

const rebels2 = pilots.filter(pilot => pilot.faction === "Rebels"); // again, much like Java8 collection!
const empire2 = pilots.filter(pilot => pilot.faction === "Empire");
console.log(rebels2, empire2);

const personnel = [
    {
        id: 5,
        name: "Luke Skywalker",
        pilotingScore: 98,
        shootingScore: 56,
        isForceUser: true,
    },
    {
        id: 82,
        name: "Sabine Wren",
        pilotingScore: 73,
        shootingScore: 99,
        isForceUser: false,
    },
    {
        id: 22,
        name: "Zeb Orellios",
        pilotingScore: 20,
        shootingScore: 59,
        isForceUser: false,
    },
    {
        id: 15,
        name: "Ezra Bridger",
        pilotingScore: 43,
        shootingScore: 67,
        isForceUser: true,
    },
    {
        id: 11,
        name: "Caleb Dume",
        pilotingScore: 71,
        shootingScore: 85,
        isForceUser: true,
    },
];

const totalJediScore = personnel
    .filter(function (person) {
        return person.isForceUser;
    })
    .map(function (jedi) {
        return jedi.pilotingScore + jedi.shootingScore;
    })
    .reduce(function (acc, score) {
        return acc + score;
    }, 0);

const totalJediScore2 = personnel
    .filter(person => person.isForceUser)
    .map(jedi => jedi.pilotingScore + jedi.shootingScore)
    .reduce((acc, score) => acc + score, 0);                // method chaining, Java8 collection, again!!

console.log(totalJediScore2);

console.log();

//---

const headerRow = [
    { key: 'rn', sortable: false },
    { key: 'bucket', sortable: false },
    { key: 'key', sortable: false },
    { key: 'path', sortable: false },
    { key: 'size', sortable: true },
    { key: 'last_modified_date', sortable: true },
    { key: 'id', sortable: false },
    { key: 'run', sortable: false },
    { key: 'subject_id', sortable: false },
    { key: 'sample_id', sortable: false },
    { key: 'actions', sortable: false },
];
console.log(headerRow);

const columns = headerRow
    .filter((row) => row.key !== 'bucket')
    .filter((row) => row.key !== 'key');
console.log(columns);

const HIDDEN_COLS = ['key', 'bucket'];
const isColVisible = (col) => !HIDDEN_COLS.includes(col);
const columns1 = headerRow.filter((row) => isColVisible(row.key));
console.log(columns1);
