import path from 'path';
import { __dirname } from './dirname.js';
import gendiff from '../bin/gendiff.js';

const dir = __dirname(import.meta.url); 

describe('gendiff', () => {
    test('should correctly detect no differences', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.json');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.json');

      const expected = '{\n\t"host": "hexlet.io",\n\t"timeout": 50,\n\t"proxy": "123.234.53.22",\n\t"follow": false\n}';
      const result = gendiff(filepath1, filepath2);

      expect(result).toEqual(expected);
    });
  
    test('should detect added, removed, and changed keys', () => {
      // Implement this test
      return Promise.resolve(true);
    });
  
    // Add more test cases as needed
  }); 