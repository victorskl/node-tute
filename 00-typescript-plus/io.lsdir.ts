import * as fs from 'fs';

const myDirList: string[] = fs.readdirSync('../00-typescript/');
console.log(myDirList);

myDirList.forEach((fileName) => {
  console.log(fileName);
});

// More
// https://stackoverflow.com/questions/2727167/how-do-you-get-a-list-of-the-names-of-all-files-present-in-a-directory-in-node-j
