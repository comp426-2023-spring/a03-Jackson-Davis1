#!/usr/bin/env node

// Your CLI code here
import minimist from 'minimist';
const argv = minimist(process.argv.slice(2));


console.log(argv);