#!/usr/bin/env node

const { Command } = require('commander');
const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .argument('<filepath1>', 'path to first config file')
  .argument('<filepath2>', 'path to second config file')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    // Здесь будет логика сравнения файлов
    console.log(`Comparing ${filepath1} and ${filepath2}`);
    console.log(`Format: ${options.format || 'default'}`);
  });

program.parse(process.argv);