#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import parseFile from '../src/parsing.js';
import _ from 'lodash'; 

const program = new Command();

const defaultPath1 = path.join('..', 'data', 'file1.json');
const defaultPath2 = path.join('..', 'data', 'file2.json');

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .argument('[filepath1]', 'path to first config file', defaultPath1)
  .argument('[filepath2]', 'path to second config file', defaultPath2)
  .option('-f, --format [type]', 'output format')
  .action((filepath1 , filepath2, options) => {
    // Здесь будет логика сравнения файлов
    console.log(`Comparing ${filepath1} and ${filepath2}`);
    let obj1 = null;
    let obj2 = null;
    if (fs.existsSync(filepath1)) {
      console.log('The filepath1 exists.');
      obj1 = parseFile(filepath1);
    } else {
      console.log('The filepath1 does not exist.');
    }
    if (fs.existsSync(filepath2)) {
      console.log('The filepath2 exists.');
      obj2 = parseFile(filepath2);
    } else {
      console.log('The filepath2 does not exist.');
    }

    if (!_.isNull(obj1) && !_.isNull(obj2)) {
        const keysUnion = _.union(_.keys(obj1), _.keys(obj2)).sort();
        let diff = keysUnion.map(key => {
          if (!_.has(obj2, key)) {
            return `- ${key}: ${obj1[key]}`;
          } else if (!_.has(obj1, key)) {
            return `+ ${key}: ${obj2[key]}`;
          } else if (obj1[key] !== obj2[key]) {
            return [`- ${key}: ${obj1[key]}`, `+ ${key}: ${obj2[key]}`].join('\n');
          } else {
            return `  ${key}: ${obj1[key]}`;
          }
        }).join('\n');
      
        console.log(diff);
    }
    else {
        console.log('Cannot compare files.');
    }

    console.log(`Format: ${options.format || 'default'}`);
  });

program.parse(process.argv);





