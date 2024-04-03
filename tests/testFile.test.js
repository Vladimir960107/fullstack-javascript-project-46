import path from 'path';
import compare from '../src/compare.js';
import { fileURLToPath } from 'url';

const dir = path.dirname(fileURLToPath(import.meta.url));
describe('gendiff', () => {
    test('should correctly detect no differences', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.json');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.json');

      const expected = `  follow: false
  host: hexlet.io
  proxy: 123.234.53.22
  timeout: 50`;
      const result = compare(filepath1, filepath2);
      expect(result).toEqual(expected);
    });
  
    test('should detect added, removed, and changed keys', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.yaml');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.yaml');
      const expected = `- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true`;

      const result = compare(filepath1, filepath2);

      expect(result).toEqual(expected);
    });
  
    // Add more test cases as needed
  }); 