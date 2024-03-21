#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import parseFile from '../src/parsing.js';

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
    if (fs.existsSync(filepath1)) {
      console.log('The filepath1 exists.');
      const file1 = parseFile(filepath1);
      console.log(file1);
    } else {
      console.log('The filepath1 does not exist.');
    }
    if (fs.existsSync(filepath2)) {
      console.log('The filepath2 exists.');
      const file2 = parseFile(filepath2);
      console.log(file2);
    } else {
      console.log('The filepath2 does not exist.');
    }
    console.log(`Format: ${options.format || 'default'}`);
  });

program.parse(process.argv);



