// Understanding Date and Time in JavaScript
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript

// Date Object

const now = new Date();
console.log(now);

const ts = now.getTime();
console.log(ts);

const epoch = new Date(0);
console.log(epoch);
