import fs from 'fs';
import parseFile from './parsing.js';
import _ from 'lodash'; 

const compare = (filepath1, filepath2, options = {}) => {
    console.log(`Comparing ${filepath1} and ${filepath2}`);

    // Initialize variables to hold file contents
    let obj1 = null;
    let obj2 = null;

    // Check existence and parse files
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

    // Initialize a variable for differences string
    let diff = '';

    // Compare the files if both are successfully loaded
    if (!_.isNull(obj1) && !_.isNull(obj2)) {
        const keysUnion = _.union(_.keys(obj1), _.keys(obj2)).sort();

        diff = keysUnion.map(key => {
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
    } else {
        console.log('Cannot compare files.');
        return; // Early return to avoid processing further in case of errors
    }
    
    // Safely access and log the format option, defaulting to 'default'
    const format = options.format || 'default';
    console.log(`Format: ${format}`);

    // Optionally, return the diff if you intend to use the result programmatically
    return diff;
};

export default compare;