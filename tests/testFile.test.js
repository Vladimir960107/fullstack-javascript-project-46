import path from 'path';
import gendiff from '../bin/gendiff.js';

const dir = import.meta.url; 

describe('gendiff', () => {
    test('should correctly detect no differences', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.json');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.json');

      const expected = "{\n\thost: hexlet.io,\n\ttimeout: 50,\n\tproxy: 123.234.53.22,\n\tfollow: false\n}";
      const result = gendiff(filepath1, filepath2);

      expect(result).toEqual(expected);
    });
  
    test('should detect added, removed, and changed keys', () => {
      const filepath1 = path.join(dir, '__fixtures__', 'data1.json');
      const filepath2 = path.join(dir, '__fixtures__', 'data2.json');

      const expected = "{\n\t- follow: false\n\thost: hexlet.io\n\t- proxy: 123.234.53.22\n\t- timeout: 50\n\t+ timeout: 20\n\t+ verbose: true\n}"


      const result = gendiff(filepath1, filepath2);

      expect(result).toEqual(expected);

      return Promise.resolve(true);
    });
  
    // Add more test cases as needed
  }); 