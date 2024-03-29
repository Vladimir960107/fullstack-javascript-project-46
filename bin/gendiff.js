#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';
import compare from '../src/compare';


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
    compare(filepath1,filepath2, options);
  });

program.parse(process.argv);









