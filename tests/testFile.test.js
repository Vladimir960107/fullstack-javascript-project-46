import fs from 'fs';
import path from 'path';
import compare from '../src/compare.js';
import { fileURLToPath } from 'url';

const readFile = (filename) => fs.readFileSync(path.join(dir, '__fixtures__', filename), 'utf-8');

const dir = path.dirname(fileURLToPath(import.meta.url));
describe('gendiff', () => {
    test('should correctly detect no differences', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.json');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.json');

      const expected = readFile('expected_no_difference.txt');
      const result = compare(filepath1, filepath2);
      expect(result).toEqual(expected);
    });
  
    test('should detect added, removed, and changed keys', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.yaml');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.yaml');
      const expected = readFile('expected_difference.txt');

      const result = compare(filepath1, filepath2);

      expect(result).toEqual(expected);
    });
  
    // Add more test cases as needed
  }); 