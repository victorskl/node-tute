import logger from "./logger.mjs"; // ES6

function main() {
    logger.info('logger module included in main...');
}

main();

// Node <= v12
// node --experimental-modules main.mjs

// Node >= v13
// node main.mjs
