let fs = require('fs');  // import Node.js `fs` module

function parseCsv(content) {
  let lines = content.split('\n');

  console.log(lines.length);

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];

    if (i === 0) {
      let columns = line.split(',');
      console.log(columns);
    } else {
      let rows = line.split(',');
      console.log(rows);
    }
  }

  // lines.forEach(line => {
  //   console.log(line.split(','));
  // });
}

function main() {
  let csvFileBuffer = fs.readFileSync('hero.csv');  // return Node.js Buffer object

  console.log(csvFileBuffer);
  console.log(typeof csvFileBuffer);
  console.log(csvFileBuffer.toJSON());
  console.log(csvFileBuffer.toString());

  let content = csvFileBuffer.toString('utf-8');  // Node.js Buffer object to string

  parseCsv(content);
}

main();
