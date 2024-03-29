// https://www.npmjs.com/package/mime
// https://www.npmjs.com/package/@types/mime
// https://github.com/broofa/mime

// Alternatively
// https://www.npmjs.com/package/mime-types
// https://www.npmjs.com/package/@types/mime-types
// https://github.com/jshttp/mime-types

// yarn add mime
// yarn add @types/mime --dev
// yarn build
// node mime

import mime from 'mime';

const htmlReport = 'path/to/some_report.html';
console.log(mime.getType(htmlReport));

const pngFile = 'some.blue.png';
console.log(mime.getType(pngFile));

const vcfGz = 'my_variant.vcf.gz';
console.log(mime.getType(vcfGz));

const bam = 'my_alignment.bam';
console.log(mime.getType(bam));
